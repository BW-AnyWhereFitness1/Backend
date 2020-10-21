exports.up = function(knex) {
    return knex.schema.createTable('class', tbl => {
      tbl.increments();
  
      tbl
        .string('name')
        .notNullable()
        .unique()
        .index();
  
      tbl.string('type').notNullable();
  
      tbl
        .string('intensity')
        .notNullable()
        .index();
  
      tbl
        .string('location')
        .notNullable()
        .index();
  
      tbl.integer('max_size').notNullable();
      tbl.float('duration').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('class');
  };