const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/v1/send-email", (req, res) => {
  res.end("email sent");
});

app.get("/api/v1/run-batch-job", (req, res) => {
  switch (req.query) {
    case "users":
      return res.end("Running users batch job");

    case "order-cleanup":
      return res.end("Running order-cleanup batch job");

    default:
      return res.end("No batch job in query");
  }
});

app.get("/api/v1/restart", (req, res) => {
  res.end("Restarting servers");
});

module.exports = app;
