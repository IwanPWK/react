// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTask,
  updateTask,
  deleteTask,
  updateCompleteTask,
} = require("../controllers/taskController");

router.get("/get-tasks", getTodos);
router.post("/new-task", createTask);
router.patch("/update-task", updateTask);
router.patch("/complete-task", updateCompleteTask);
router.delete("/delete-task", deleteTask);

module.exports = router;
