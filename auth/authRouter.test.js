const supertest = require('supertest');
const server = require('../api/server');
const db = require('../data/connection');
const { expectCt } = require('helmet');

test('POST /api/auth/register', () => {
  return supertest(server)
    .post('/api/auth/register')
    .send({
      name: 'nami',
      email: 'nami@gmail.com',
      username: 'nami',
      password: 'nami12345',
      role: 'instructor'
    }); 
});

test('POST /api/auth/login', async () => {
  return supertest(server) 
    .post('/api/auth/register')
    .send({
      name: 'nami',
      email: 'nami@gmail.com',
      username: 'nami',
      password: 'nami',
      role: 'client'
    });
});