const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Booking Service Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ service: "booking", status: "ok" });
});

app.listen(3002, "0.0.0.0", () => {
  console.log("Booking service running on 3002");
});
