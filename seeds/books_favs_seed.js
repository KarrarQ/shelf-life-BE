const booksData = require("../data/books-data");
const favorites = require("../data/favorites-data");


exports.seed = function(knex) {
  return knex("books")
    .del()
    .then(() => {
      return knex.raw("ALTER SEQUENCE books_id_seq RESTART WITH 1");
    })
    .then(() => {
      return knex("books").insert(booksData);
    })
    .then(() => {
      return knex("favorites")
        .del()
        .then(() => {
          return knex.raw("ALTER SEQUENCE favorites_id_seq RESTART WITH 1");
        })
    })
    
};
