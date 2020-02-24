import React, { useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import axios from "axios";
import { Container } from "react-bootstrap";

function App() {
  useEffect(() => {
    axios.get("/all").then(response => console.log(response));
  }, []);

  return (
    <div className="App">
      <Container>
        <TodoList>
          <h3>hello</h3>
        </TodoList>
      </Container>
    </div>
  );
}

export default App;
