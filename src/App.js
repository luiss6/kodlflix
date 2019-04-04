import React, { Component } from 'react';
import AnnieHall from './AnnieHall.jpg';
import './App.css';
import TVseries from "./TVseries";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={AnnieHall} alt="Annie Hall" />
        <TVseries />
      </div>
      

    );
  }
}

export default App;
