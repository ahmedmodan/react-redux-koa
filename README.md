# A React - Redux - Koa Boilerplate

This is a production ready boilerplate for projects in React and Redux.
The backend is in Koa but there is a branch available with Express instead.

The list of Technologies in use are listed below:
  * React - views
  * Redux - State management
  * ImmutableJS - immutability management
  * koa - Node framework
  * Materialize - CSS Framework
  * SASS - CSS pre-processor
  * Webpack - module bundler
  * Babel - transpiling ES7+ code
  * ESlint - linting
  * Mocha - testing framework
  * Karma - test runner
  * Chai - assertion library
  * dotenv - environment variables
  * corss-env - multi-environment variables

## Requirements

---

* Node > 5.7

> Note. If using Node 6 make sure it is at least 6.2.1 or above.


##App Architecture

```
Root Directory
-- server
    | -- server.js
    | -- middleware
          | -- dev-middleware.js  #middleware for react HMR
          | -- api
                | -- routes.js #routes
                | -- counter
                     | -- counterRoutes.js #endpoints
                      | -- counterController.js #endpoint logic
-- src
    | -- main.jsx #entry point of application
    | -- components #reusable react components
    |     | -- displayNumber #component name
    |           | -- displayNumber.jsx #react component
    |           | -- displayNumber.scss #component styling
    | -- containers #larger stateful components
    |     | -- App #main App component
    |           | -- App.jsx #main component
    |           | -- app.scss #main component styling
    | -- layouts # encapsulating components dictating over all style
    |     | -- CoreLayout.jsx # core layout
    | -- redux #everything redux
          | -- configureStore.jsx #redux middleware goes here
          | -- rootReducer.jsx #combine all reducers here
          | -- modules
                | -- counterReducer.jsx #redux actions, constants, and reducer all in one file
          | -- states
                | -- counterState.jsx #define initial state for reducer
-- test
    | -- Counter.spec.jsx #tests

```

To get started:
1. Make sure you have Node installed.
2. Install the dependecies by executing the following command:

    ```shell
      npm install
    ```

3. Rename .env.template to .env
4. To run the application in development mode execute the following command:

  ```shell
    npm run dev
  ```

  >Note: This will run the application in development mode and hot module replacement will be enabled.

5. To run the tests execute the following command:
  ```shell
    #the following command will execute the tests once:
    npm test

    #the following command will re-run the tests on every file save. Useful for writing tests:
    npm run test:dev
  ```
6. To build a minified, uglified, production verison of the application bundle after running all of the tests execute the following command:

  ```shell
    npm start
  ```

  >Note: this command will not output a bundle if you have any errors in your code, Even linting errors!!

If for some reason you are having trouble getting anything to work feel free reach out.
