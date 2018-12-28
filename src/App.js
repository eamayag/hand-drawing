import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draw from './Draw';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <Draw></Draw>
          </p>
            
        </header>
      </div>
    );
  }
}

export default App;
