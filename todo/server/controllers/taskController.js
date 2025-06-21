// controllers/taskController.js
const db = require("../db");

// Ambil semua task
const getTodos = (req, res) => {
  const q = "SELECT * FROM tasks ORDER BY createdAt DESC";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

// Tambah task baru, lalu ambil data terbaru
const createTask = (req, res) => {
  const q =
    "INSERT INTO tasks (task, createdAt, timezone, status) VALUES (?, ?, ?, ?)";
  const { task, timezone } = req.body;
  // const createdAt = new Date().toISOString().slice(0, 19).replace("T", " ");
  const createdAt = new Date().toISOString();
  db.query(q, [task, createdAt, timezone, "active"], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    console.log("Task has been added");
    const insertedTask = {
      id: result.insertId, // ini dari hasil INSERT
      task,
      timezone,
      createdAt,
      status: "active",
    };
    return res.status(201).json(insertedTask);
    // getTodos(req, res); // Panggil getTodos untuk ambil data terbaru
  });
};

const updateTask = (req, res) => {
  console.log(req.body);
  const createdAt = new Date().toISOString();
  const { id, task, timezone } = req.body;
  const q =
    "update tasks set task = ?, createdAt = ?, timezone = ?, status = ? where id = ?";
  const values = [task, createdAt, timezone, "active", id];
  db.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    console.log("Task has been added");
    console.log(id);
    const updatedTask = {
      id: id, // ini dari hasil INSERT
      task,
      timezone,
      createdAt,
      status: "active",
    };
    return res.status(201).json(updatedTask);
    // getTodos(req, res); // Panggil getTodos untuk ambil data terbaru
  });
};

module.exports = {
  getTodos,
  createTask,
  updateTask,
};
