const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// require our routes/index.js file
const userRoutes = require("./routes/index-3");

// prefix every single route in here with /users
app.use("/users", userRoutes);

app.use(bodyParser.json());

// Now let's tell our app about those routes we made!
app.use(userRoutes);

app.get("/", (req, res) => {
  return res.json("Start with /users");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
