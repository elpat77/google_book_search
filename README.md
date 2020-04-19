# Google Books Search

Let the book search begin!

Deployed App: https://pat-google-books.herokuapp.com/

### Overview

Google book Search is a React based search application that allows users to search for books, getting back the books information and allowying them to save selected books to their saved books list. It was created using React components, working with helper/util functions, and utilizing React lifecycle methods to query and display books based on user searches. 
The application used Google Books API and Axios in order to make back end requests. Express is used for backend functionality and creating the server. MongoDB handles user account information and allows users to store books to the database.  


### This application contains two pages:

  *Book Search* - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  *Saved Books* - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

### Technologies used:

* React
* Google Books API
* Bootstrap
* Node.js
* Express
* Axios
* MongoDB
* Morgan


