const books = require("./books-data");
const generateAllBooks = (books) => {
    return books.map(book => {
        const { isbn, title, description, amazon_link, author, recomended_by, book_image } = book;
        return { 
            id: isbn,
            title: title,
            description: description,
            amazonLink: amazon_link,
            author: author,
            recomendedBy: recomended_by,
            bookImage: book_image
        }
    })
}