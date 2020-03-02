import React, { useState } from 'react';
import axios from 'axios';
import './booksearch.css';
import BookList from '../BookPost/BookPost'

function BookSearch() {
  const [input, setInput] = useState('');
  let book = []

  function getBooks() {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${input}`

    axios.get(url).then(result => {
      const data = result.data.items;
      console.log('data', data)

      for (let i = 0; i < data.length; i++) {
        let bookTitles = data[i].volumeInfo.title;
        let authors = data[i].volumeInfo.authors;
        let description = data[i].volumeInfo.description;
        let image = data[i].volumeInfo.imageLinks.thumbnail;
        let link = data[i].volumeInfo.previewLink;
        let id = data[i].id;
        book.push(bookTitles, authors, description, image, link, id)
        console.log(book);

        // console.log(authors);
        // console.log(description);
        // console.log(image);
        // console.log(link);
        // console.log(id);
      }
    })
  }

  return (
    <div>
      <div className="bookSearch">
        <h1>Type in a book name:</h1>
        <div><input value={input} id="bookInput" onInput={e => setInput(e.target.value)} /></div>
        <br></br>
        <button className="btn btn-lg btn-primary" id="searchBooks" onClick={() => getBooks()}><i class="fa fa-search"></i> Show me the book</button>
      </div>
      <div className="container justify-content-center col-md-10 bookDisplay">

        <div class="card text-center">
          <div class="card-header">
            <h1 class="card-title" id="bookDisplay">The books are:</h1>
          </div>
          <BookList />
        </div>
      </div>
    </div>
  )
}


export default BookSearch;
