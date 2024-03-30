import { Task, taskList } from "../models/TaskModel";

let taskList1 = [...taskList];

export const getAllTasks = async () => {
  return taskList1;
};

export const getTaskById = async (id: string) => {
  return taskList1.find((task) => task.id === id);
};

export const createTask = async (taskData: Task) => {
  taskList1 = [...taskList1, taskData];
  return taskList1;
};

export const updateTask = async (id: string, taskData: Partial<Task>) => {
  const taskDataKeys = Object.keys(taskData);
  const updatedTaskList = taskList1.map((task) => {
    if (task.id === id) {
      const taskKeys = Object.keys(task);
      let update: Task = { ...task };
      console.log(update);
      taskDataKeys.forEach((key) => (update[key] = taskData[key]));
      return update;
    } else {
      return task;
    }
  });
  taskList1 = [...updatedTaskList];
  return updatedTaskList;
};

export const deleteTask = async (id: string) => {};
