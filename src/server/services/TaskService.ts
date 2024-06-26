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
  let wasUpdated = false;
  const updatedTaskList = taskList1.map((task) => {
    if (task.id === id) {
      const taskKeys = Object.keys(task);
      let update: Task = { ...task };
      taskDataKeys.forEach((key) => (update[key] = taskData[key]));
      wasUpdated = true;
      return update;
    } else {
      return task;
    }
  });
  if (!wasUpdated) {
    throw new Error(`Task #${id} not found`);
  }
  taskList1 = [...updatedTaskList];
  return updatedTaskList;
};

export const deleteTask = async (id: string) => {
  try {
    let wasDeleted = false;
    taskList1.forEach((task, index) => {
      if (task.id === id) {
        taskList1.splice(index, 1);
        wasDeleted = true;
      }
    });
    if (!wasDeleted) {
      throw new Error(`Task #${id} not found`);
    }
    return taskList1;
  } catch (error) {
    console.log(error);
  }
};
