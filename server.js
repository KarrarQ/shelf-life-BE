const { request, response } = require('express');
const express = require('express');
const ourBooks = require('./data/books-data')
const favorites = require('./data/favorites-data')
const app = express();

app.use(express.json());
app.use(express.static('public'));
//the line above refers to the 'PUBLIC' file

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Shelf Life';
app.locals.books = ourBooks;
app.locals.favorites = favorites;

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


app.post('/api/vi/favorites', (request, response) => {
    const favorite = request.body;
    const { id, title, description, amazon_link, author, recommendedBy, image } = favorite;
    for(let requiredParameter of ['id', 'title', 'description', 'amazon_link', 'author', 'recommendedBy', 'image']) {
        if(!favorite[requiredParameter]) {
            response.status(422)
            .send({
                error: `Expected format: {id:<String>, title: <String>, description: <String>, amazon_link: <String>, author: <String>, recommendedBy: <String>, image: <String>}. You're missing a "${requiredParameter}" property.`
            });
        }
    }
    app.locals.favorites.push({ id, title, description, amazon_link, author, recommendedBy, image });
    response.status(201).json({ id, title, description, amazon_link, author, recommendedBy, image });
});