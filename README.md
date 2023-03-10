# Shelf Life

Do you have a hard time picking out the right book to read?  Well look no further, Shelf Life is here to help! This Backend for the App is a database for book recomendations! You are able to look at a database of books referred by the Creators and add the book to your favorites database based on your interest and the recomendation!  Further more, there is a data base accessible to access NYT Top100 Books.

## Table of Contents
  - [Setup](#setup)
  - [Technologies](#technologies)
  - [Project Spec](#project-spec)
  - [Abstract](#abstract)
  - [Learning Goals](#learning-goals)
  - [Preview](#preview)
  - [Wins + Challenges](#wins-and-challenges)
  - [Authors](#Authors)

## Setup
- Deployed on Heroku 
  - [Recommended Books](https://shelf-life-db.herokuapp.com/api/v1/books)
  - [Favorited Books](https://shelf-life-db.herokuapp.com/api/v1/favorites)
  - [NYT Top100](https://shelf-life-db.herokuapp.com/api/v1/top100) 
- Run Locally 
  - Clone down this repo [here](https://github.com/KarrarQ/shelf-life-BE)
  - On the command line, type: $ npm intall
  - On the command line, type: $ npm start
  - Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
  - The page will reload when you make changes.\


## Technologies

  - Express.js
  - Knex
  - PostgreSQL
  - pg Admin4
  - Node.js
  - Cors
  - VSCode
  - Heroku (deployment)
  - Git Version Control / GitHub
  - Webpack node package
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line

  
## Project Spec
[click here](https://frontend.turing.edu/projects/module-3/stretch.html)

## Abstract 

This project is a custom built backend, with a GET, POST, PATCH, and DELETE methods, attached to 3 separate tables on our PostseQL. We connected our Express app with postseQL using the helper dependency of knex!  Knex helps us build our tables with migrations, and then it helps us fill the tables out with our data, using Seeding!  The first table we created in our Shelf Life Database is for books that users recommend, we started off with 10 per group member so a total of 30 recommendations in our first table.  The Favorites table is affected by the user's choice of favorite books, this database - table updates with the User's actions.  Finally we created a third table that included the New York Times Best Sellers top 100 books, Though we did not have enough time (one week) to build out the full FE functionality, the Backend table is ready to go! We imagined users going through the our top100 database table and choosing books to add (POST) to the recomendation database.  
## Learning Goals

- Build Backend using Express, Knex, and PostseQL
- Gain competency with Backend flow and fundamentals
- Learn how to create and use Migration and seeding files
- Practice and Deploy our backend using Heroku
- Create DRY and clean code!

## Preview 
### Landing Page 
![Landing Page](screenshots/ScreenshotForTheBookYo.png)
### Recommended Books
![books](screenshots/ScreenshotBooks.png)
### Favorited Books 
![Favorites](screenshots/ScreenshotFavorites.png)
### Top100 PostseQL
![top100](screenshots/ScreenshotTop100.png)

## Wins & Challenges

- Successfully built a full stack app!
- successfully organized our BE architecture to run efficiently and for devs to easily understand! 
- Creating a fresh custom backend and then manipulating the data using React was a learning curve, but ultimately it was super cool to build a full stack app!
- After creating our first two databases, we added a third (top100) and this process was interesting, inthat we had to navigate a new table in code that had already been working, instead of a clean slate.  It was a little bit of a struggle, but ultimately we were successful
- We would have liked to further this app by beautfying the recommendation page, and cleaning up the functionality on the FE otherwise, the Backend is complete!

## Authors

<table>
    <tr>
      <td> Reid Poole <a href="https://github.com/rpoole444">GH</td>
    </tr>
<td><img src="https://avatars.githubusercontent.com/u/111818942?v=4" alt="Reid Poole"
 width="150" height="auto" /></td>

   <tr>
      <td> Karrar Qasim <a href="https://github.com/KarrarQ">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/108508596?v=4" alt="Karrar Qasim"
 width="150" height="auto" /></td>
 
   <tr>
      <td> John Ammon <a href="https://github.com/Mortis78">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/113194002?v=4" alt="John Ammon"
 width="150" height="auto" /></td>
</table>
  
