/*


By the end of this chapter, you should be able to:

    Explain what an environment variable is
    Create and read environment variables using the dotenv module

 */

// I try because this chapter seems to be easier.
// 
// /*

/*

Introduction

Working with environment variables is a great way to configure different aspects of your Node.js application. Many cloud hosts (Heroku, Azure, AWS, now.sh, etc.) and Node.js modules use environment variables.

Hosts, for example, will set a PORT variable that specifies on which port the server should listen to properly work. Your application might have different behaviors (like logging, error handling, error reporting) depending on the value of an environment variable.

When you authenticate through external providers (login through facebook, linkedin, twitter etc), you will be granted a "secret key" which those services will use to authenticate your application. Very very bad things can happen if those keys get into the hands of a hacker so it's essential to isolate certain variable definitions from where your code is.
 */ 
