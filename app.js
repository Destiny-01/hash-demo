const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const saltRounds = 10;
let hashedPassword;
const raw = "ReskillAmericans123";

bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(raw, salt, (err, hash) => {
    hashedPassword = hash;
  });
});

app.post("/pass", (req, res) => {
  const request = req.body.pass;
  bcrypt.compare(request, hashedPassword, (err, result) => {
    if (err) {
      return res.status(500).json({ err });
    }
    return res.status(200).json({ result });
  });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
