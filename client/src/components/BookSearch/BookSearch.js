import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './booksearch.css';

function BookSearch(props) {
  const [counter, changeCounter] = useState(0);


  // component lifecycle - renders to screen (component mounts), 
  // receives props, build state, component updates, 
  // lastly the componen unmounts
  //this is same as component will mount - what happens when the component is loaded on the screen
  // when about is called, it will print hello
  // when leaving about, it will print goodbye because we left that comoponent
  useEffect(() => {
    console.log("hello, you just came to the book search component");
    return () => console.log("goodbye, you are leaving about");
  }, []);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  // function addOne() {
  //   changeCounter(counter + 1);
  // }

  function getBooks() {
    let url = `https://www.googleapis.com/books/v1/volumes?q=quilting`

    axios.get(url).then(result => {
      const data = result.data.items;
      console.log('data', data)
      console.log(data[1].volumeInfo.title)

      for (let i = 0; i < data.length; i++) {
        let bookTitles = data[i].volumeInfo.title;
        console.log(bookTitles);
      }
    })
  }

  return (
    <div>
      <div className="bookSearch">
        <h1>Type in a book name:</h1>
        <div><input type="text" id="bookInput"></input></div>
        <br></br>
        <button className="btn btn-lg btn-primary" id="searchBooks" onClick={() => getBooks()}><i class="fa fa-search"></i> Show me the book</button>
      </div>
      <div className="container justify-content-center col-md-10 bookDisplay">
        <h1> the list of books will display here</h1>
      </div>
    </div>
  )
}


export default BookSearch;
