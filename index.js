const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send("FlowAI API is live");
});

// Health
app.get("/api", (req, res) => {
  res.send("FlowAI running");
});

// Health check for deployment
app.get("/api/healthz", (req, res) => {
  res.json({ status: "ok" });
});

// MAIN endpoint (FIXED)
app.post("/api/run", (req, res) => {
  const { task, payload } = req.body;

  if (task === "health_check") {
    return res.json({ status: "ok", task });
  }

  return res.json({
    status: "success",
    task,
    result: `Executed task: ${task}`,
    payload
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
