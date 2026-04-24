const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("FlowAI API is live");
});

app.get("/api", (req, res) => {
  res.send("FlowAI running");
});

app.post("/api/run", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running");
});
