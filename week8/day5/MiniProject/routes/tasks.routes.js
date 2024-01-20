const express = require("express");

const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/tasks.controller.js");

const tasks_router = express.Router();

tasks_router.get("/", getAllTasks)
tasks_router.post("/", createTask)
tasks_router.get("/:id", getTaskById)
tasks_router.put("/:id", updateTaskById)
tasks_router.delete("/:id", deleteTaskById)

module.exports = {
    tasks_router,
};
