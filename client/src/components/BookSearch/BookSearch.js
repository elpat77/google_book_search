import React, { useState } from 'react';
import axios from 'axios';
import './booksearch.css';
import BookList from '../BookList/BookList'

function BookSearch() {
  const [input, setInput] = useState({ input: '' });
  const [bookList, setlist] = useState({ book: [] });


  function getBooks() {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${input.input}`
    let book = [];
    axios.get(url).then(result => {
      const data = result.data.items;
      console.log('data', data)
      console.log('input', input)

      for (let i = 0; i < data.length; i++) {
        let bookTitles = data[i].volumeInfo.title;
        let authors = data[i].volumeInfo.authors;
        let description = data[i].volumeInfo.description;
        let image = data[i].volumeInfo.imageLinks.thumbnail;
        let link = data[i].volumeInfo.previewLink;
        let bookId = data[i].id;
        book.push({ bookTitles, authors, description, image, link, bookId })
        // console.log(book);
        // console.log(authors);
        // console.log(description);
        // console.log(image);
        // console.log(link);
        // console.log(id);
      }
      setlist({ book: book })
    })

  }


  return (
    <div>
      <div className="bookSearch">
        <h1>Search for any book</h1>
        <h2>Can enter keywords such as: Title, Author, Subject</h2>
        <div>
          <input
            className="col-5"
            type="text"
            value={input.input}
            id="bookInput"
            onChange={e => setInput({ input: e.target.value })} />
        </div>
        <br></br>
        <button
          className="btn btn-lg btn-primary"
          id="searchBooks"
          onClick={(e) => { e.preventDefault(); getBooks() }}>
          <i className="fa fa-search"></i> Show me the books</button>
      </div>
      <div className="container justify-content-center col-md-8 bookDisplay">
        <BookList books={bookList.book} />
      </div>
    </div>
  )
}

export default BookSearch;
