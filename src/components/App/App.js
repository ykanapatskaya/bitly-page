import React, { Component } from 'react';
import ShortenBar from '../ShortenBar/ShortenBar';
import LinkList from '../LinkList/LinkList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <a hreh="#">Tour</a>
            <a hreh="#">Enterprise</a>
            <a hreh="#">Resources</a>
            <a hreh="#">About</a>
          </nav>
          <div className="App-header">
            <h1>Shorten. Share. Measure.</h1>
            <p>Join Bitly, the world's leading link management platform.</p>
            <ShortenBar />
          </div>
        </header>
        <div className="main-wrapper">
          <main>
            <LinkList />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
