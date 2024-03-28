const request = require('supertest');
const { app } = require('../../src/index');

afterEach((done) => {
  done();
});

describe('API Tests', () => {
  it('should create a new task', async () => {
    const newTask = { id: '1', title: 'Test Task', completed: false };

    const response = await request(app).post('/tasks').send(newTask);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newTask.title);
    expect(response.body.completed).toBe(newTask.completed);
  });

  it('should get a list of tasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // POST Route
  it('POST /tasks/:id should add an item', async () => {
    const newItem = {
      id: '1',
      title: 'First Task',
      completed: true,
    };
    const response = await request(app).post('/tasks').send(newItem);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newItem);
  });

  it('POST /tasks/:id should add another item', async () => {
    const newItem = {
      id: '2',
      title: 'Second Task',
      completed: true,
    };
    const response = await request(app).post('/tasks').send(newItem);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newItem);
  });

  // PUT Route
  it('PUT /tasks/:id should update an item', async () => {
    const updatedItem = { id: '1', title: 'Updated Task', completed: true };

    const response = await request(app).put('/tasks/1').send(updatedItem);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ...updatedItem });
  });

  // DELETE Route
  it('DELETE /tasks/:id should delete an item', async () => {
    const response = await request(app).delete('/tasks/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Item deleted' });
  });

  // Edge Case: Non-existent item DELETE
  it('DELETE /tasks/:id with non-existent ID should return 404', async () => {
    const response = await request(app).delete('/tasks/999');
    expect(response.status).toBe(404);
  });

  // Edge Case: Invalid PUT Data
  it('PUT /tasks/:id with invalid data should return 400', async () => {
    const invalidItem = { id: '1', price: 'invalid' };
    const response = await request(app).put('/tasks/1').send(invalidItem);
    expect(response.status).toBe(400);
  });
});
