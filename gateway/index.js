const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.get("/", (req, res) => {
  res.send("Gateway running 🚀");
});

app.use("/api/users", createProxyMiddleware({
  target: "http://user-service:3001",
  changeOrigin: true
}));

app.use("/api/bookings", createProxyMiddleware({
  target: "http://booking-service:3002",
  changeOrigin: true
}));

app.use("/api/recommendations", createProxyMiddleware({
  target: "http://recommendation-service:3003",
  changeOrigin: true
}));

app.listen(3000, "0.0.0.0", () => {
  console.log("Gateway running on 3000");
});
