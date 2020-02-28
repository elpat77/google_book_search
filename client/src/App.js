import React, { useEffect } from "react";
import "./App.css";
import BookSearch from "./components/BookSearch/BookSearch";
import SavedBooks from "./components/SavedBooks/SavedBooks";
import axios from "axios";
import { Container } from "react-bootstrap";

function App() {
  useEffect(() => {
    axios.get("/all").then(response => console.log(response));
  }, []);

  return (
    <div className="App">
      <Container>
        <BookSearch>
          <h3>hello</h3>
        </BookSearch>
      </Container>
    </div>
  );
}

export default App;
