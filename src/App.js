import React, { Component } from 'react';
import logo from './logo.svg';
import TravisRox from './TravisRox';
import BaileyRox from './BaileyRox';
import JacobRox from './JacobRox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <TravisRox />
          <br />
          <JacobRox />
          <br />
          <BaileyRox />
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
