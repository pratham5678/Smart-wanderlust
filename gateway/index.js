const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const app = express();

/* ---------------- PROMETHEUS ---------------- */

// Collect default Node.js metrics
client.collectDefaultMetrics();

// Custom counter for gateway requests
const gatewayRequests = new client.Counter({
  name: "gateway_requests_total",
  help: "Total number of requests handled by the gateway",
});

// Count every incoming request
app.use((req, res, next) => {
  gatewayRequests.inc();
  next();
});

/* ---------------- CORS ---------------- */

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:30001",
    "http://192.168.49.2:30001",
    "http://192.168.49.2:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Extra CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

/* ---------------- ROUTES ---------------- */

// Health check
app.get("/", (req, res) => {
  res.send("Gateway Service Running 🚀");
});

// USERS
app.get("/api/users", async (req, res) => {
  try {
    res.json([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" }
    ]);
  } catch (err) {
    res.status(500).json({ error: "Users service error" });
  }
});

// BOOKINGS
app.get("/api/bookings", async (req, res) => {
  try {
    res.json([
      { id: 1, place: "Goa", status: "confirmed" },
      { id: 2, place: "Manali", status: "pending" }
    ]);
  } catch (err) {
    res.status(500).json({ error: "Booking service error" });
  }
});

// RECOMMENDATIONS
app.get("/api/recommendations", async (req, res) => {
  try {
    res.json([
      { id: 1, place: "Kerala", rating: 5 },
      { id: 2, place: "Shimla", rating: 4 }
    ]);
  } catch (err) {
    res.status(500).json({ error: "Recommendation service error" });
  }
});

/* ---------------- METRICS ---------------- */

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

/* ---------------- START SERVER ---------------- */

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Gateway running on port ${PORT}`);
});
