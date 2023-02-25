const booksData = require("../data/books-data");
const favorites = require("../data/favorites-data");
const top100 = require("../data/top100-data")

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
        .then(() => {
          return knex("top100")
        })
        .del()
        .then(() => {
          return knex.raw("ALTER SEQUENCE top100_id_seq RESTART WITH 1")
        })
        .then(() => {
          return knex("top100").insert(top100)

        })
        // .then(() => {
        //   return knex("favorites").insert(favorites); //if favorites are autoIncrementing then remove last ".then"
        // });
    });
};
