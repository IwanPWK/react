const express = require("express");
const app = express();
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
// const db = require("./db");
// const mysql = require("mysql2");

app.use(cors());
app.use(express.json()); // untuk parsing JSON body

app.use("/api", taskRoutes); // semua route di taskRoutes diawali dengan /api

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "todos",
// });

// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected to database");
//   }
// });

// const getTodos = (req, res) => {
//   const q = "SELECT * FROM tasks ORDER BY createdAt DESC";
//   db.query(q, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//     return res.status(200).json(data);
//   });
// };

// app.post("/new-task", (req, res) => {
//   console.log(req.body);
//   const q =
//     "INSERT INTO tasks (task, createdAt, timezone, status) VALUES (?, ?, ?, ?)";
//   const { task, timezone } = req.body;
//
//   const createdAt = new Date().toISOString();
//   db.query(q, [task, createdAt, timezone, "active"], (err) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//     console.log("Task has been added");
//     return res.status(200).json("Task has been added");
//   });
// });

// app.get("/get-tasks", (req, res) => {
//   const q = "SELECT * FROM tasks ORDER BY createdAt DESC";
//   db.query(q, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//     return res.status(200).json(data);
//   });
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
