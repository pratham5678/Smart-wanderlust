const express = require("express");
const mongoose = require("mongoose");
const client = require("prom-client");

const app = express();
app.use(express.json());

// 🔥 Prometheus metrics
client.collectDefaultMetrics();

// 🔌 MongoDB connection
mongoose.connect("mongodb://mongodb:27017/test")
  .then(() => console.log("User DB connected"))
  .catch(err => console.log("DB Error:", err));

// 📦 Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", UserSchema);

// 🧪 Test route
app.get("/", (req, res) => {
  res.send("User Service Running 🚀");
});

// ➕ Create user
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// 📥 Get users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 📊 Prometheus metrics endpoint (IMPORTANT)
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// 🚀 Start server
app.listen(3001, "0.0.0.0", () => {
  console.log("User service running on 3001");
});
