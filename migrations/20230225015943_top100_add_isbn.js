exports.up = function(knex) {
    return knex.schema.alterTable("top100", (table) => {
        table.unique("isbn")
      })
};


exports.down = function(knex) {
    return knex.schema.table("top100", (table) => {
        table.dropUnique("isbn")
      })
};
