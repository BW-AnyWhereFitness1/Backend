
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          name: 'sun',
          username: 'sun',
          email: 'sun@gmail.com',
          password: "sun",
          role: 'instructor'
        },

        {
          id: 2,
          name: 'admin',
          username: 'admin123',
          email: 'admin@gmail.com',
          password: "pass123456",
          role: 'instructor'
        },
        {
          id: 3,
          name: 'test',
          username: 'test123',
          email: 'test@gmail.com',
          password: "testtest",
          role: 'client'
        }
      ]);
    });
};