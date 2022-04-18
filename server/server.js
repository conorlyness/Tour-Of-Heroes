const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const API_PORT = 3001;

app.use(express.json());
app.use(cors());

//API routes

app.get("/heroes", async (req, res) => {
  const viewAllHeroes = await db.viewAllHeroes();
  if (viewAllHeroes) {
    return res.status(201).json(viewAllHeroes);
  }

  res.status(404);
});

app.listen(API_PORT, () => {
  db.connect();
  console.log(`listening on port ${API_PORT}`);
});

module.exports = app;
