import React, { Component } from 'react';
import Header from '../Header/Header';
import ShortenBar from '../ShortenBar/ShortenBar';
import LinkList from '../LinkList/LinkList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Header />

          <div className="App__form-wrapper">
            <h1>Shorten. Share. Measure.</h1>
            <p>Join Bitly, the world's leading link management platform.</p>
            <ShortenBar />
          </div>

        </section>

        <main>
          <div className="App__content-wrapper">
            <LinkList />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
