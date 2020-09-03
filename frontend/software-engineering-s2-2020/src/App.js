import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Component } from 'react';

import Navbar from "./components/navbar.component";
import RegisterUser from "./components/register.component";
import About from "./components/about.component";
import Login from "./components/login.component";
import Submit from "./components/submit.component";
import Homepage from "./components/homepage.component";
import Search from "./components/search-results.component";

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/submit" component={Submit} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={RegisterUser} />
            <Route path="/search" component={Search} />
            <Route path="/" component={Homepage} />
          </Switch>
      </Router>
    );
  }
}

export default App;
