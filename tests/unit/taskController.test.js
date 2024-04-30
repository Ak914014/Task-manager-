const request = require('supertest');
const app = require('../../src/app');
const Task = require('../../src/models/Task');

beforeEach(async () => {
    await Task.deleteMany();
});

describe('POST /api/tasks', () => {
    test('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.title).toBe('Test Task');
    });
});
