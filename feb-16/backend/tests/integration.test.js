const request = require("supertest");
const app = require("../app");
const { _internal } = require("../app");

describe("Integration Tests", () => {

  beforeEach(() => {
    _internal.reset();
  });

  test("Dashboard summary works", async () => {
    const res = await request(app).get("/api/dashboard");

    expect(res.statusCode).toBe(200);
    expect(res.body.totalIncome).toBe(12000);
    expect(res.body.totalExpenses).toBe(800);
    expect(res.body.balance).toBe(11200);
  });

});
