const supertest = require('supertest');
const server = require('../api/server');
const db = require('../data/connection');

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});
describe('trying to register and login', () => {

  test('POST /api/auth/register', async () => {
    const response = await supertest(server)
      .post('/api/auth/register')
      .send({
        name: 'namik',
        email: 'namik@gmail.com',
        username: 'namik',
        password: 'namik',
        role: 'instructor'
      });
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      message: 'success!'
    });
  });
    
  test('POST /api/auth/login', async () => {
    const register = await supertest(server)
      .post('/api/auth/register')
      .send({
        name: 'namik',
        email: 'namik@gmail.com',
        username: 'namik',
        password: 'namik',
        role: 'client'
      });
    const response = await supertest(server)
      .post('/api/auth/login')
      .send({username: 'namik', password: 'namik'});
  
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toMatchObject({message: 'Welcome to our API'});
  });
})
