// npm packages
const express = require("express");
const morgan = require("morgan");

// globals
const PORT = process.env.PORT || 3000; // heroku will assign a port env variable
const app = express();

// app config
app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
  return res.json("DEPLOYED!");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    /*
     if we're in development mode, include stack trace (full error object)
     otherwise, it's an empty object so the user doesn't see all of that
    */
    error: app.get("env") === "development" ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
