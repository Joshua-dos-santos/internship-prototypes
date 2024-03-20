const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const USERNAME = "joshua";
  const PASSWORD = "test";
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    const user = {
      id: 1,
      name: "joshua",
      username: "joshua",
    };
    const token = jwt.sign(user, process.env.JWT_KEY);
    res.json({
      token,
      user,
    });
  } else {
    res.status(403);
    res.json({
      message: "wrong login information",
    });
  }
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  /* eslint-disable */console.log((`3262889094_13_2_13_66_4`,`Example app listening at http://localhost:${port}`))
})

