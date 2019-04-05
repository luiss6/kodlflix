import React, { Component } from 'react';
import AnnieHall from './AnnieHall.jpg';
import './App.css';
import TVseries from "./TVseries";
import Titles from "./Titles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={AnnieHall} alt="Annie Hall" className="fave"/>
        <TVseries />
      </div>
      

    );
  }
}

export default App;
