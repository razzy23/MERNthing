import React from "react";
import { BrowserRouter as Router, Route } from react-router-dom;
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BrowserBooks from "./components/browse-books.component";
import FindBook from "./components/find-book.component";
import Profile from "./components/profile.component";

function App() {
  return (
    <Router>
      <Navbar>
        <br/>
        <Route path="/" exact component={BrowserBooks} />
        <Route path="/book" exact component={FindBook} />
        <Route path="profile" exact component={Profile} />
      </Navbar>
    </Router>
  );
}

export default App;
