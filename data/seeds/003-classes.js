exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('class').insert([
        {
          name: 'pure yoga',
          type: 'yoga',
          intensity: 'high',
          location: 'vegas',
          max_size: 22,
          duration: 1.0,
          date: '02/10/2020'
        },
        {
          name: 'meditation',
          type: 'medetation',
          intensity: 'low',
          location: 'birmingham',
          max_size: 12,
          duration: 2.4,
          date: '02/10/2020'
        },
        {
          name: 'cardio running',
          type: 'cardio',
          intensity: 'medium',
          location: 'japan',
          max_size: 21,
          duration: 1.13,
          date: '02/10/2020'
        }
      ]);
    });
};