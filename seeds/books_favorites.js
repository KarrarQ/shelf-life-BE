const booksData = require("../data/books-data");
const favorites = require("../data/favorites-data");

exports.seed = (knex) => {
  return knex("books")
    .del()
    .then(() => {
      return knex.raw("restart with one");
    })
    .then(() => {
      return knex("books").insert(booksData);
    })
    .then(() => {
      return knex("favorites")
        .del()
        .then(() => {
          return knex.raw("restart with one");
        })
        // .then(() => {
        //   return knex("favorites").insert(favorites); //if favorites are autoIncrementing then remove last ".then"
        // });
    });
};
