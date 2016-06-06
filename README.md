# Modanterist
A very basic Pinterest Clone in React + Redux.

This is a personal project and serves as a testing ground for any and all technologies I want to try out.

In order to get started make sure you have Node > 5 installed. Node 6 is breaking some dependencies so make sure the node version is below node 6.
You will also need to have PostgreSQL installed on your local machine.

To get started complete the following steps:

1. Execute the following command to install dependencies:

  ```shell
  npm install
  ```

2. Rename the .env.template file to .env and fill in the necessary info that is empty. You may need to obtain your own api keys for cloudinary.
3. Start a PostgreSQL server at port 5432 (this is the default port for PostgreSQL)
4. Create a database in PostgreSQL named pint
5. Navigate to '/server/database' in the project folder and execute the following command:

  ```shell
  psql pint -f tables.sql
  ```

>NOTE: This will file will create the necessary tables required for this app to work. You can also use this command to clear out any and all data you may have in those tables.

6. To start the app in development mode execute the following command and browse to http://localhost:3000 to view the app:

  ```shell
  npm run dev
  ```

7. To minify, uglify, lint and build the app for deployment run the following command:

  ```shell
  npm start
  ```
