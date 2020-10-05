# need completely:

- learn bcrypt - stuck in create psql database;


# Todo:

- send mail in nodejs: mailers
- background job -> use redis -> agenda js
- socket with private rooms
- web scraper -> giá bỉm trung bình trên shoppe

# Extras:
- node dependencies injection

# Tips:
- Use a 3 layer architecture.

- Don't put your business logic into the express.js controllers.

- Use PubSub pattern and emit events for background tasks.

- Have dependency injection for your peace of mind.

- Never leak your passwords, secrets and API keys, use a configuration manager.

- Split your node.js server configurations into small modules that can be loaded independently.



# Tips env in heroku:

Setting environment variables on Heroku

When our application is deployed on Heroku, we do not load our environment variables from a .env file. Instead, we tell Heroku the name of the variable using the following syntax.

heroku config:set NAME_OF_VARIABLE=VALUE -a NAME_OF_YOUR_HEROKU_APP