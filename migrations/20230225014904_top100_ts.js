exports.up = function(knex) {
    return knex.schema.table("top100", (table) => {
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.table("top100", (table) => {
        table.dropTimestamps();
      });
};
