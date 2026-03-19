const request = require('supertest');
const app = require('./app');

Test('GET / returns correct message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, CI/CD is working!');
})