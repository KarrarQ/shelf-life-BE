const express = require('express');
const ourBooks = require('./data/books-data')
const app = express();

app.use(express.json())
app.use(express.static('public')) 
//the line above refers to the 'PUBLIC' file

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Shelf Life';
app.locals.books = ourBooks;

app.get('/', (request, response) => {
    response.send('This is for the books yo.')
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
});

app.get('/api/v1/books', (request, response) => {
    const { books } = app.locals
    response.status(200).json({ books })
});

app.get('/api/v1/books/:id', (request, response) => {
    const { id } = request.params;
    const book = app.locals.books.find(book => book.id === id);
    if(!book) {
        return response.status(404).json({
            message:`no novel found with id of # ${id}`
        })
    } else {
        response.status(200).json(book)
    }
});

