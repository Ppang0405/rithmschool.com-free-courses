/*

By the end of this chapter, you should be able to:

    Define what server side templating is
    Render templates using pug
    Use pug to create dynamic templates


 */

/*

Rendering Templates

So far we have only seen how to respond by sending text, but when building server-side applications, we usually want to send back HTML or JSON / XML (if we're building an RESTful API).

If we want to simply send HTML back we can use response.sendFile, but since we are using server-side templates, we will be using a method called render.

In order to do that, we need to make use of a templating engine (a tool for dynamically rendering HTML using server data). There are quite a few we can use with Node.js including ejs, but we will be using one called pug (formerly known as jade).

Before we introduce the pug syntax, let's first start a new project and see what we need to include. By default, express expects a folder containing templates to be called views. Instead of overriding that default, we will also create a folder called views.

 */