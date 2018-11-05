import React, { Component } from 'react';
import Logo from './stories/molecules/logo';
import SuperNavBar from './stories/organisms/super-nav-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SuperNavBar />
          <Logo />
        </header>
      </div>
    );
  }
}

export default App;
