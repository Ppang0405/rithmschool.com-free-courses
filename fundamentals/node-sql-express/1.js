/*

{ Serving JSON with Express.js. }


By the end of this chapter, you should be able to:

    Understand how to respond with JSON: use .json when sending back JSON.
    Include body-parser to collect form values and request information



1.

.send() vs .json()

When sending back JSON from an Express application you may see two different ways, using the json() method as well as the send() method.

There is no actual difference between .send and .json, both methods are almost identical. .json calls .send at the end.

However, the main difference between .json and .send comes into picture when you have to pass non objects as a response. .json will convert non objects (ex. null, undefined etc) to JSON whereas res.send will not convert them. .json will also format the response using settings defined in your application.

In short, they are very similar, but it is preferable to use .json when sending back JSON.


2.

 */