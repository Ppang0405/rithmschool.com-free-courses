const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.status(200).json({ name: "Elie" });
});

app.get("/instructor/:firstName", (req, res) => {
  return res.send(
    `The name of this instructor is ${req.params.firstName}`
  );
});

app.get("/secret", (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
});

app.listen(3000, () => {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});