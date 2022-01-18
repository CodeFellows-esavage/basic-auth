'use strict';

// 3rd Party Resources
const express = require('express');

// Prepare the express app
const app = express();

//mystuff
// const signUp = require('./auth/signup');
const auth = require('./routes/auth.route');
const err403 = require('./error-handlers/err403');
// Process JSON input and put the data on req.body
app.use(express.json());

// const sequelize = new Sequelize(DATABASE_URL);


// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Create a Sequelize model
// const User = sequelize.define('User', {


// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
// app.post('/signup', signUp);
app.use(auth);
app.use(err403);

// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo

// make sure our tables are created, start up the HTTP server.
// sequelize.sync()
module.exports = {
  start: (port) => {
    app.listen(port, () => console.log(`Server is running on PORT: ${port}`));
  },
  app,
};