'use strict';

const { app } = require('../lib/server');
const { db } = require('../lib/models');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing signup route:', () => {
  it('should POST to /signup to create a new user', async () => {
    const response = await request.post('/signup').send({
      username: 'Testname',
      password: 'testpassword',
    });
    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('Testname');
  });
});

describe('Testing signin route:', () => {
  it('should POST to /signin to vaidate proper credentials were passed', async () => {

    const response = await request.post('/signin').set({
      authorization: 'Basic VGVzdG5hbWU6dGVzdHBhc3N3b3Jk',
    });
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Testname');
  });
  it('should return 403 if bad credientials are passed', async () => {

    const response = await request.post('/signin').set({
      authorization: 'Basic VGVzdG5hbWU6dGVzdHBhc3N3b3Jg',
    });
    expect(response.status).toEqual(403);
  });
});




