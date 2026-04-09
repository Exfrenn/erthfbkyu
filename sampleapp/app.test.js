const request = require('supertest');
const app = require('./app');

describe("GET /", () => {
    it("should return 'Bruh'", async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Bru');
    });
});

describe("GET /name/:name", () => {
    it("should return 'Hello {name}'", async () => {
        const name = "John Doe";
        const res = await request(app).get(`/name/${name}`);
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe(`Hello ${name}`);
    });
});