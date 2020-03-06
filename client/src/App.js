import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import BookSearch from "./components/BookSearch/BookSearch";
import SavedBooks from "./components/SavedBooks/SavedBooks";
import NAV from "./components/Nav/Nav"

function App() {

  return (
    <div className="App">
      <Router>
        <NAV />
        <Switch>
          <Route exact path="/">
            <BookSearch />
          </Route>
          <Route exact path="/saved">
            <SavedBooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
