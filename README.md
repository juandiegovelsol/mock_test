# Tech Coding Test - Node Essentials - TS

## Test 1

### Event Loop Coding Test

Objective: Implement a simple program that demonstrates the event loop in Node.js.

Instructions:
Go to `./event_loop/process_data.ts` and do the following instructions:

a. Define a function processData that takes an object with two properties: data (an array of numbers) and callback (a callback function). This function should iterate over the data array, double each number, and push the doubled values into a new array. Once all elements are processed, it should call the callback function with the new array as an argument.

b. Define a function printData that takes an array as a parameter and prints each element to the console.
c. In your program, create an array numbers containing numbers from 1 to 5.
d. Use `processData` to double each number in the numbers array. Pass printData as the callback function.

Check your code implementations in `process.ts` and uncomment the IIFE to try and verify that your approach is working.

Write Unit Tests: go to `./__tests__/process_data.test.ts` and complete a couple of unit tests using Jest to ensure that the processData function correctly processes data and invokes the callback.

Go to `eventloop.md` to check the tech background about the task what you've done.

Submission:

Should submit your Node.js program with the processData and printData functions, along with the unit tests.

Run the unit testing for this task using the command: `npm run test:process`.
**Shall pass all tests**.

## Test 2

### Project Description

Go to `./server` to take the following mission:

You are tasked with creating a simple Node.js + TS application that simulates a todo list. The application should expose a RESTful API for managing tasks in the todo list. Your goal is to implement various features while ensuring error handling, utilizing the event loop, closures, and callbacks effectively.

Project Structure
Complete the code approaches for the project structure with the following files:

- `index.ts`: The entry point of your Express application.
- `./server/TaskService.ts`: Implement the service logic for managing tasks.
- `./server/TaskModel.ts`: Define a simple data model for tasks.
- `./server/middleware.ts`: Implement middleware for error handling.
- `./server/routes.ts`: Define the RESTful API routes for managing tasks.

### Requirements

Implement a data model (`TaskModel.ts`) for tasks with fields like id, title and completed.

Create a `TaskService.ts` file with the following functions:

- `getAllTasks()`: Retrieve a list of all tasks.
- `getTaskById(id: string)`: Retrieve a task by ID.
- `createTask(taskData: Task)`: Create a new task.
- `updateTask(id: string, taskData: Partial<Task>)`: Update an existing task and must not admit new fields.
- `deleteTask(id: string)`: Delete a task by ID.

Implement a RESTful API using Express in routes.ts for the following endpoints:

- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a task by ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task.
- `DELETE /tasks/:id`: Delete a task by ID.

Utilize error handling middleware (`middleware.ts`) to handle errors gracefully and provide appropriate HTTP responses.

Ensure that all async operations (e.g., file I/O, database queries) are non-blocking and utilize the event loop effectively.

Implement closures or callbacks where necessary for asynchronous operations or custom logic.
Feel free to recreate the server mission in your local machine and try your approach for finally, copy in this cloud repo.
Go to unit testing suite located at `./__tests__/api.test.ts` to check how should work your api.

### Evaluation Criteria

- Correctness and functionality of the RESTful API endpoints.
- Proper error handling and response codes (e.g., 404 for not found, 500 for server errors).
- Effective use of closures or callbacks in asynchronous operations.
- Clean and organized code structure.

Run the unit testing for this task using the command: `npm run test:api`.
**Shall pass all tests**.

## How To Run

### Precondition:

- Firstly, fork this repo.
- Once you fork this repo, automatically will run the command: `npm install && npm run dev`
- Enable web browser cookies if it's not running by default.
- To stop dev mode: `Ctrl + C` in windows/linux or `Command + C` in OSX.
- To run all tests in console: `npm run test`.
- To stop both test modes, you can also press in terminal key `q` or the key combination mentioned in **stop dev mode**.

Keep practice and have fun! \
Good Luck and enjoy the path!

Made for [Make it Real](https://github.com/makeitrealcamp)
