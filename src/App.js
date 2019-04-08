import React, { Component } from 'react';
import './App.css';
import TVseries from "./TVseries";
import Titles from "./Titles";
import MainMovie from "./MainMovie";
import ComponentTest from "./ComponentTest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TVseries />
      </div>
      

    );
  }
}

export default App;
