const express = require("express");
const mongoose = require("mongoose");
const client = require("prom-client");

const app = express();
app.use(express.json());

/* -------------------- PROMETHEUS METRICS -------------------- */

// collect default Node.js metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics();

// custom counter example (optional but good for DevOps)
const bookingCounter = new client.Counter({
  name: "booking_created_total",
  help: "Total number of bookings created"
});

/* -------------------- MONGODB CONNECTION -------------------- */

mongoose.connect("mongodb://mongodb:27017/test")
  .then(() => console.log("✅ Booking DB connected"))
  .catch(err => console.log("DB Error:", err));

/* -------------------- SCHEMA -------------------- */

const BookingSchema = new mongoose.Schema({
  place: String,
  user: String
});

const Booking = mongoose.model("Booking", BookingSchema);

/* -------------------- ROUTES -------------------- */

// health check
app.get("/", (req, res) => {
  res.send("Booking Service Running 🚀");
});

// create booking
app.post("/bookings", async (req, res) => {
  const booking = await Booking.create(req.body);

  // metric increment
  bookingCounter.inc();

  res.json(booking);
});

// get bookings
app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

/* -------------------- METRICS ENDPOINT -------------------- */

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

/* -------------------- SERVER START -------------------- */

app.listen(3002, "0.0.0.0", () => {
  console.log("Booking service running on 3002");
});
