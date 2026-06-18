const express = require("express");
const mongoose = require("mongoose");
const client = require("prom-client");

const app = express();
app.use(express.json());

/* ---------------- PROMETHEUS SETUP ---------------- */

// default Node.js metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics();

// custom metric: track recommendation requests
const recommendationCounter = new client.Counter({
  name: "recommendation_requests_total",
  help: "Total number of recommendation requests"
});

/* ---------------- MONGODB ---------------- */

mongoose.connect("mongodb://mongodb:27017/test")
  .then(() => console.log("✅ Recommendation DB connected"))
  .catch(err => console.log("DB Error:", err));

/* ---------------- SCHEMA ---------------- */

const RecommendationSchema = new mongoose.Schema({
  user: String,
  place: String
});

const Recommendation = mongoose.model("Recommendation", RecommendationSchema);

/* ---------------- ROUTES ---------------- */

// health check
app.get("/", (req, res) => {
  res.send("Recommendation Service Running 🚀");
});

// create recommendation
app.post("/recommend", async (req, res) => {
  const rec = await Recommendation.create(req.body);

  // increment metric
  recommendationCounter.inc();

  res.json(rec);
});

// get recommendations
app.get("/recommend", async (req, res) => {
  const recs = await Recommendation.find();
  res.json(recs);
});

/* ---------------- METRICS ENDPOINT ---------------- */

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

/* ---------------- SERVER START ---------------- */

app.listen(3003, "0.0.0.0", () => {
  console.log("Recommendation service running on 3003");
});
