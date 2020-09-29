# Todo:

- send mail in nodejs: mailers
- background job -> use redis -> agenda js
- socket with private rooms
- web scraper -> giá bỉm trung bình trên shoppe

# Add:
- node dependencies injection

# Tips:
- Use a 3 layer architecture.

- Don't put your business logic into the express.js controllers.

- Use PubSub pattern and emit events for background tasks.

- Have dependency injection for your peace of mind.

- Never leak your passwords, secrets and API keys, use a configuration manager.

- Split your node.js server configurations into small modules that can be loaded independently.
