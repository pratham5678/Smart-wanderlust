const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Recommendation Service Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ service: "recommendation", status: "ok" });
});

app.listen(3003, "0.0.0.0", () => {
  console.log("Recommendation service running on 3003");
});
