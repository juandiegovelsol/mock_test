import express, { Request, Response } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "./services/TaskService";
import { Task } from "./models/TaskModel";

const router = express.Router();

router.get("/healthcheck", (_: Request, res: Response) => {
  res.status(202).json({ message: "Server is Ok" });
});

router.get("/", async (req: Request, res: Response) => {
  const taskList = await getAllTasks();
  if (!taskList) {
    res.status(404).json({ error: "Not found task list" });
  }
  res.status(200).json(taskList);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await getTaskById(id);
  if (!task) {
    res.status(404).json({ error: `Task #${id} not found` });
  }
  res.status(200).json(task);
});

router.post("/", async (req: Request, res: Response) => {
  const newTask: Task = req.body;
  const taskList = await createTask(newTask);
  res.status(200).json(taskList);
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const partialTask: Partial<Task> = req.body;
  const taskList = await updateTask(id, partialTask);
  if (!taskList) {
    res.status(404).json({ error: `Task #${id} not found` });
  }
  res.status(200).json(taskList);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const taskList = await deleteTask(id);
  if (!taskList) {
    res.status(404).json({ error: `Task #${id} not found` });
  }
  res.status(200).json(taskList);
});

export default router;
