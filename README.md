# basic-auth
Deploys an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.

- Developed By: Erik Savage

dev branch PR: https://github.com/eriksavage/api-server/pull/1

Deployment URL: https://esavage-basic-auth.herokuapp.com/

![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/basic-auth.git`
- `cd` into basic-auth
- run `npm install`

## Usage
- To start server run : `npm start`
- To test server run: `npm run test`

## Models

### User
```
'User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}
```

## Routes

### Signup
-  POST `/signup`, requires a user object: returns created user object from database


### Signin
-  POST `/signin`, requires a user object: returns validated user object from database

## Features
- Error Handling
  - sends 404 if route or method is unavailable

## Testing
Verifies the following:
- 404 on a bad route
- 404 on a bad method

The correct status codes and returned data for each REST route:
- POST to /signup to create a new user
- POST to /signin to login as a user (use basic auth)
- Tests for auth middleware and the routes
  - Does the middleware function (send it a basic header)
  - Do the routes assert the requirements (signup/signin)

## Resources
- sequelize docs
- jest docs
- supertest docs
- http cats
- Code Fellows
- Daniel Jackson
- Kellen Linse