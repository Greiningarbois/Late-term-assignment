const express = require("express");
const app = express();
const api = require("./server/api");
const path = require("path");

app.use(express.static(path.join(__dirname, "../", "dist")));

app.use("/api", api);

app.get("*", (req, res) => {
  res.status(404).send({ error: "No route defined" });
});

app.set("json space", 2);

module.exports = app;
