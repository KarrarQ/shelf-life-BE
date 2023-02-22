require("dotenv").config();
const cors = require("cors");
const { request, response } = require("express");
const express = require("express");
const ourBooks = require("./data/books-data");
const favorites = require("./data/favorites-data");
const { all } = require("express/lib/application");
const app = express();
const queries = require("./queries");

app.use(express.json());
app.use(cors());
// app.use(express.static("public"));
//the line above refers to the 'PUBLIC' file

app.set("port", process.env.PORT || 3001);
app.locals.title = "Shelf Life";
app.locals.books = ourBooks;
app.locals.favorites = favorites;

app.get("/", (request, response) => {
  response.send("This is for the books yo.");
});

app.get("/api/v1/books", (request, response) => {
  queries
    .getAllBooks()
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json({ error }));
});

app.get("/api/v1/books/:isbn", (request, response) => {
  queries
    .getSingleBook(request)
    .then((books) => {
      if (books.length) {
        response.status(200).json(books);
      } else {
        response.status(404).json({
          error: `no novel found with isbn of # ${request.params.isbn}`,
        });
      }
    })
    .catch((error) => response.status(500).json({ error }));
});

app.get("/api/vi/favorites", (request, response) => {
  queries
    .getAllFavorites()
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json({ error }));
});

app.delete("/api/v1/favorites/:isbn", (request, response) => {
  queries.removeBookFromFavorites(request).then((unfavorited) => {
    if (unfavorited) {
      return response.status(200).json({
        message: `Book with isbn number ${request.params.isbn} has been removed from faverites`,
      });
    } else {
      response
        .status(404)
        .json({
          error: `could not find book based on isbn ${request.params.isbn}`,
        });
    }
  });
});

app.post("/api/v1/favorites", (request, response) => {
  const favorite = request.body;
  const {
    isbn,
    title,
    description,
    amazon_link: amazonLink,
    author,
    recommended_by: recommendedBy,
    book_image: bookImage,
  } = favorite;
  for (let requiredParameter of [
    "isbn",
    "title",
    "description",
    "amazon_link",
    "author",
    "recommended_by",
    "book_image",
  ]) {
    if (!favorite[requiredParameter]) {
      response.status(422).send({
        error: `Expected format: {isbn:<String>, title: <String>, description: <String>, amazon_link: <String>, author: <String>, recommended_by: <String>, book_image: <String>}. You're missing a "${requiredParameter}" property.`,
      });
    }
  }
  queries
    .addBookToFavorites(favorite)
    .then((data) => response.status(201).json(data))
    .catch((error) => response.status(500).json({ error }));
});

app.patch("./api/v1/books/:isbn", async (request, response) => {
  queries.updatedFavorites(request).then((count) => {
    if (count) {
      response
        .status(200)
        .json({
          message: `Book with isbn number ${request.params.isbn}`,
          isFavorited: `${request.body.isFavorited}`,
        });
    } else {
      response
        .status(404)
        .json({
          error:
            "This request failed. Double check your request body and isbn# for proper formatting",
        });
    }
  });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
