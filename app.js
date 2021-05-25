const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const saltRounds = 10;
const hashArray = [];
const raw = "ReskillAmericans123";

bcrypt.genSalt(saltRounds, (err, salt) => {
  const hash = bcrypt.hash(raw, salt, (err, hash) => {
    hashArray.push(hash);
    console.log(hashArray);
  });
});
app.post("/pass", (req, res) => {
  const myHash = hashArray.find[0];
  const request = req.body.pass;
  bcrypt.compare(request, myHash, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
