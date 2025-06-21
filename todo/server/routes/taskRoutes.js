// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/get-tasks", getTodos);
router.post("/new-task", createTask);
router.post("/update-task", updateTask);

module.exports = router;
