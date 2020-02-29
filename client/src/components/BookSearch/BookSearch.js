import React, { useEffect, useState } from 'react';
// import axios from 'axios';
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

  function addOne() {
    changeCounter(counter + 1);
  }

  return (
    <div className="bookSearch">
      <h1>Hello from Book Search</h1>
      <button onClick={() => addOne()}>Click Me</button>

    </div>
  )
}

export default BookSearch;
