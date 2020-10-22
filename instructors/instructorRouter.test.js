const supertest = require('supertest');
const server = require('../api/server');
const db = require('../data/connection');

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

describe('adding a class', () => {

    test('POST /api/auth/instructor/classes/add', async () => {
      const register = await supertest(server)
        .post('/api/auth/register')
        .send({
          name: 'namik',
          email: 'namik@gmail.com',
          username: 'namik',
          password: 'namik',
          role: 'instructor'
        });
      const login = await supertest(server)
        .post('/api/auth/login')
        .send({username: 'namik', password: 'namik'});
    
      const response = await supertest(server)
        .post('/api/auth/instructor/classes/add')
        .set('authorization', login.body.token)
        .send({
          name: 'walk',
          type: 'walking',
          intensity: 'medium',
          location: 'iceland',
          date: '02-21-2020',
          max_size: 10,
          duration: 1
        });
      expect(response.status).toBe(200);
    });
})
  
// describe('getting a class', () => {

//     test('/GET /api/auth/instructor/classes/:id', async () => {
//       const register = await supertest(server)
//         .post('/api/auth/register')
//         .send({
//           name: 'namik',
//           email: 'namik@gmail.com',
//           username: 'namik',
//           password: 'namik',
//           role: 'instructor'
//         });
//       const login = await supertest(server)
//         .post('/api/auth/login')
//         .send({username: 'namik', password: 'namik'});
    
//       const response = await supertest(server)
//         .get('/api/auth/instructor/classes/1')
//         .set('authorization', login.body.token);
    
//       expect(response.status).toBe(200);
//       expect.arrayContaining(response.body);
//     });
// })
 
// describe('deleting a class', () => {

//     test('/DELETE /api/auth/instructor/classes/:id', async () => {
//       const register = await supertest(server)
//         .post('/api/auth/register')
//         .send({
//           name: 'namik',
//           email: 'namik@gmail.com',
//           username: 'namik',
//           password: 'namik',
//           role: 'instructor'
//         });
//       const login = await supertest(server)
//         .post('/api/auth/login')
//         .send({username: 'namik', password: 'namik'});
    
//       const response = await supertest(server)
//         .delete('/api/auth/instructor/classes/1')
//         .set('authorization', login.body.token);
    
//       expect(response.status).toBe(200);
//       expect(response.body).toMatchObject({message: 'class deleted'});
//     });
// }) 