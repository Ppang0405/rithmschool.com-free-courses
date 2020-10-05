/*

By the end of this chapter, you should be able to:

    Describe how to secure an API
    Understand what a JWT is and how to create one
    Authenticate an API using JSON Web Tokens



 */

/*


Authenticating an API

So how do we secure our API? We can do what we have been doing before and store information in the session and in cookies, but this can become problematic. This is especially true when you're working with lots of different servers (lots of small applications written in different languages) or when you're building mobile applications, which have severe limitations with cookies.

Instead of using cookies/sessions to authenticate users, we will be using tokens. This process involves creating an encrypted token on the server and sending it to the client where it will either be stored in a cookie or in localStorage (more commonly done with localStorage), and on every future request, the token will be placed in the header and will be decrypted on the server.

The server will store a secret key used to encrypt and decrypt the token so that there can not be tampering with the token in the client. This secret key is simply just a string of characters, but NEVER something you should make public when your application is in production.

You can read more about tokens versus cookies: https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/

The type of token that we will be using is a JSON Web Token, or JWT (pronounced "jot").
 */




// too hard, I do not know pg