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
  db.query(q, [task, createdAt, timezone, "Active"], (err, result) => {
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
      status: "Active",
    };
    return res.status(201).json(insertedTask);
    // getTodos(req, res); // Panggil getTodos untuk ambil data terbaru
  });
};

const updateTask = (req, res) => {
  console.log(req.body);
  // console.log(`params ${req.params}`);
  const createdAt = new Date().toISOString();
  const { id, task, timezone } = req.body;
  const q =
    "update tasks set task = ?, createdAt = ?, timezone = ? where id = ?";
  const values = [task, createdAt, timezone, id];
  db.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    console.log("Task has been added");
    // console.log(result);
    const updatedTask = {
      id: id, // ini dari hasil INSERT
      task,
      timezone,
      createdAt,
      status: "Active",
    };
    return res.status(201).json(updatedTask);
    // getTodos(req, res); // Panggil getTodos untuk ambil data terbaru
  });
};

const updateCompleteTask = (req, res) => {
  console.log(`id value is ${req.body.id}`);
  const id = req.body.id;
  const q = "update tasks set status = ? where id = ?";
  const values = ["Completed", id];
  db.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    getTodos(req, res);
  });
};

const deleteTask = (req, res) => {
  const q = "DELETE FROM tasks WHERE id = ?";
  const id = req.body.id;
  db.query(q, [id], (err, data) => {
    if (err) {
      return res.status(500).json(false);
    }
    return res.status(200).json(true);
  });
};

module.exports = {
  getTodos,
  createTask,
  updateTask,
  deleteTask,
  updateCompleteTask,
};
