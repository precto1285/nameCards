import React, { Component } from 'react';
import './App.css';
import CardOne from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import CardThree from './Components/CardThree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    );
  }
}

export default App;
