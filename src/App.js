import React, { Component } from 'react';
import './App.css';
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleTitle from './SingleTitle';
import ShowDetails from './ShowDetails';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/" component={Gallery} />
            <Route exact path="/:movieId" component={ShowDetails} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App;
