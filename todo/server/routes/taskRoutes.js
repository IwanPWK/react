// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const { getTodos, createTask } = require("../controllers/taskController");

router.get("/get-tasks", getTodos);
router.post("/new-task", createTask);

module.exports = router;
