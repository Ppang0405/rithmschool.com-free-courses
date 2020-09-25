/*


By the end of this chapter, you should be able to:

    Define what middleware is
    Write custom middleware to handle errors
    Install and use helpful middleware including morgan
    Create express applications faster using the express-generator



 */

/*

1. 

Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

Middleware functions can perform the following tasks:

    Make changes to the request and the response objects (customize a flash message or information to be sent to the user)
    End the request-response cycle (if you are not logged in redirect somewhere else)
    Call the next middleware in the stack.

The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware is code that gets run in between the request and the response. We've seen some examples of middleware already like body-parser, but we can write our own middleware as well! We will also be using our own custom middleware to configure the express router and handle errors.



 */

/*


2.

next

If you see above in the two example routes, we just added a third parameter called next. Let's focus on this a bit more!

Next is used to pass control to the next middleware function. If not the request will be left hanging or open.

What's important to note is that it passes control to the next matching route.



 */



/*


3. 

Morgan

Before we continue on, let's examine a useful module that will help log out requests and responses to the terminal

 */

/*


4.


 */