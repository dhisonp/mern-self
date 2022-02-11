const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//TEST
const custom = "dhisonp";
app.get(`/${custom}`, (req, res) => {
  res.send(`Hello ${custom}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
