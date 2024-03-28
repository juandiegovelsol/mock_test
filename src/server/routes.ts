import express, { Request, Response } from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from './services/TaskService';

const router = express.Router();

router.get('/healthcheck', (_: Request, res: Response) => {
  res.status(202).json({ message: 'Server is Ok' });
});

router.get('/', (req: Request, res: Response) => {});

router.get('/:id', (req: Request, res: Response) => {});

router.post('/', (req: Request, res: Response) => {});

router.put('/:id', (req: Request, res: Response) => {});

router.delete('/:id', (req: Request, res: Response) => {});

export default router;
