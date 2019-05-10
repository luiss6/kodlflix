import React, { Component } from 'react';
import './App.css';
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowDetails from './Details/ShowDetails';
import NotFound from "./NotFound";


class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:movieId" component={ShowDetails} />
          </Switch>   
        </div>        
      </Router >
    )
  }
}

export default App;
