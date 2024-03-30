export interface Task {
  id: String;
  title: String;
  completed: Boolean;
  [key: string]: any;
}

export let taskList: Task[] = [
  { id: "1", title: "Task 1", completed: true },
  { id: "2", title: "Task 2", completed: true },
  { id: "3", title: "Task 3", completed: false },
  { id: "4", title: "Task 4", completed: true },
];
