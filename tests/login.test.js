const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const { User } = require("../models");

require("dotenv").config();

let server = null;

const signupCredentials = {
  username: "test",
  email: "test@gmail.com",
  password: "Test1234",
};

beforeAll(async () => {
  await mongoose.connect(process.env.DB_HOST_TEST);
  server = app.listen(4000);
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});

beforeEach(async () => {
  const res = await request(app)
    .post("/api/users/register")
    .send(signupCredentials);
  expect(res.statusCode).toBe(201);
});

afterEach(async () => {
  await User.deleteMany({});
});

const user = {
  email: "test@gmail.com",
  password: "Test1234",
};

describe("POST /api/users/login", () => {
  it("should return status 200", async () => {
    const res = await request(app).post("/api/users/login").send(user);
    expect(res.statusCode).toBe(200);
  });
  it("should return token property", async () => {
    const res = await request(app).post("/api/users/login").send(user);
    expect(res.body).toHaveProperty("token");
  });
  it("should return user object with 3 fields - username, email and subscription with type String", async () => {
    const res = await request(app).post("/api/users/login").send(user);
    expect(res.body).toHaveProperty("user");
    expect(typeof res.body.user.username).toBe("string");
    expect(typeof res.body.user.email).toBe("string");
    expect(typeof res.body.user.subscription).toBe("string");
  });
  it("should not login with invalid data", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "wrongemail@gmail.com",
      password: "Wrongpassword1234",
    });

    expect(res.status).toBe(401);
  });
});
