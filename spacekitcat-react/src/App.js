import React, { Component } from 'react';
import Logo from './stories/molecules/logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
      </div>
    );
  }
}

export default App;
