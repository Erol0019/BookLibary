# BookingSystem

This our final project for the course in Full-Stack

# Modules

## Express

Express is a minimalist and flexible Node.js web application framework that provides a robust set of features for developing web applications and APIs.

## Morgan

Morgan is an HTTP request logger middleware for Node.js that logs detailed information about incoming HTTP requests.

## Helmet

Helmet is a middleware suite to help secure your Express applications by adding various HTTP headers.

## Joi

Joi is a powerful schema validation library for JavaScript that helps ensure the data you receive adheres to a specific schema or format.

# Middleware

1. Logger: Logs all incoming requests.
2. Authentication: Simulates authentication for all incoming requests.
3. Helmet: Helps secure the Express application by setting various HTTP headers.
4. Morgan: Logs HTTP requests in the development environment.

## Environment Configuration

To manage different configurations for different environments (development, production, etc.), we use the `config` module. This allows us to easily switch between configurations without changing the code.

### Setting Up Environment Variables

1. **Set the Environment**: Specify the environment using the `jwtPrivateKey` variable.

   For development and production:

   ```powershell
   $env:privateKey = mySecureKey
   ```

Define Sensitive Data: Define sensitive data, like passwords, as environment variables.

2. To set the mail password:

   ```powershell
   $env:MAIL_PASSWORD="your_password_here"
   ```
