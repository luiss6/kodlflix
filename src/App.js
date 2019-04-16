import React, { Component } from 'react';
import './App.css';
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingleTitle from './SingleTitle';
import ShowDetails from './ShowDetails';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ Gallery } />
          <Route exact path="/details" component={ ShowDetails } />
        </div>
      </Router>
    )
  }
}

export default App;
