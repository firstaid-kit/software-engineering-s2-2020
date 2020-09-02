import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import RegisterUser from "./components/register.component";
import About from "./components/about.component";
import Login from "./components/login.component";
import Submit from "./components/submit.component";
import HomepageSearch from "./components/homepage-search.component";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br/>
        <Route path="/about" component={About} />
        <br/>
        <Route path="/submit" component={Submit} />
        <br/>
        <Route path="/login" component={Login} />
        <br/>
        <Route path="/user" component={RegisterUser} />
      </div>
      <div className="container">
      <HomepageSearch></HomepageSearch>
      </div>
    </Router>
  );
}

export default App;
