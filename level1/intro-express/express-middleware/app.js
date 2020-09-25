const express = require("express");
const app = express();

/*

If we placed our app.get before our app.use we would never see that middleware run, that is why you almost always include your middleware before your route listeners.
 */

app.use(function(req, res, next) {
  console.log("our middleware ran!");
  // if not call next, response will never return to client
  return next();
});

app.get("/", function(req, res, next) {
  return res.json("We made it to the root route!");
});

/*

handle error

It is important to note that the error-handling middlware has to be defined last, because next(err) passes down the line of middleware until it reaches one that has the err parameter and a response is issued.
 */

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err); // pass the error to the next piece of middleware
});

/* 
  error handler - for a handler with four parameters, 
  the first is assumed to be an error passed by another
  handler's "next"
 */
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


app.listen(3000, function() {
  console.log("server starting!");
});