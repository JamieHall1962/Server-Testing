exports.up = function(knex, Promise) {
    return knex.schema.createTable('test', tbl =>{
        tbl.increments();
        tbl.string('username',255).notNullable()
        tbl.string('password',128).notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('test')
  };