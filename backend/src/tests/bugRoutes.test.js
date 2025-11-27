import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
import Bug from "../models/Bug.js";

beforeAll(async () => {
  await Bug.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Bug API integration tests", () => {
  let bugId;

  test("POST /api/bugs - create a new bug", async () => {
    const res = await request(app)
      .post("/api/bugs")
      .send({ title: "Login Issue", description: "Login fails on retry" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Login Issue");
    bugId = res.body._id;
  });

  test("GET /api/bugs - retrieve all bugs", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("PUT /api/bugs/:id - update a bug status", async () => {
    const res = await request(app)
      .put(`/api/bugs/${bugId}`)
      .send({ status: "resolved" });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("resolved");
  });

  test("DELETE /api/bugs/:id - delete a bug", async () => {
    const res = await request(app).delete(`/api/bugs/${bugId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Bug deleted");
  });

  test("handles non-existent bug deletion gracefully", async () => {
    const res = await request(app).delete(`/api/bugs/674f1a4d1111111111111111`);
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("Bug not found");
  });
});
