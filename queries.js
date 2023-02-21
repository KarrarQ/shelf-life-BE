const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = require("knex")(connection);

module.exports = {
  getAllBooks() {
    return database("books");
  },
  getSingleBook(request) {
    return database("books").where("isbn", request.params.isbn).select();
  },
  addBookToFavorites(favorite) {
    return database("favorites").insert(favorite, "id");
  },
  removeBookFromFavorites(request) {
    return database("favorites").where("isbn",request.params.isbn).del();
  },
  getAllFavorites() {
    return database("favorites");
  },
  updatedFavorites(request) {
    return database("books").where("isbn",request.params.isbn).update({isFavorited: request.body.isFavorited});
  }
}; //Add RecommendedBy methods
