const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/ping", (req, res) => {
  res.json({
    message: "Pong",
  });
});

app.get("/tegar", (req, res) => {
  res.json({
    message: "Tegar Penemuan",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
