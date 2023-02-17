const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.static('public')) 
//the line above refers to the 'PUBLIC' file

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Shelf Life';

app.get('/', (request, response) => {
    response.send('This is for the books yo.')
})




