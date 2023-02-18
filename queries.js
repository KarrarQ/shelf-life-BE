const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = require("knex")(connection);

module.exports = {
  getAllBooks() {
    return database("books");
  },
  getSingleBook() {
    return database("books").where("isbn", request.params.isbn);
  },
  addBookToFavorites() {},
  removeBookFromFavorites() {},
  getAllFavorites() {},
  updatedFavorites() {},
}; //Add RecommendedBy methods
