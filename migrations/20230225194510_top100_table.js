exports.up = function (knex) {
  return knex.schema.createTable("top100", (table) => {
    table.increments("id").primary();
    table.string("isbn");
    table.string("title");
    table.string("description");
    table.string("amazon_link");
    table.string("author");
    table.string("book_image");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("top100");
};
