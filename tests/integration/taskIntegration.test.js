const request = require('supertest');
const app = require('../../src/app');
const Task = require('../../src/models/Task');

beforeEach(async () => {
    await Task.deleteMany();
});

describe('GET /api/tasks', () => {
    test('should get all tasks', async () => {
        await Task.create({ title: 'Task 1', description: 'Description 1' });
        await Task.create({ title: 'Task 2', description: 'Description 2' });

        const res = await request(app).get('/api/tasks');

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
        expect(res.body[0]).toHaveProperty('_id');
    });
});

