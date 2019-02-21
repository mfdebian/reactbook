import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// . directory is 'here' which is /src
import Posts from './components/Posts';
import PostForm from './components/Postform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world
          </p>
          <PostForm />
          <br />
          <hr />
          <Posts />
        </header>
      </div>
    );
  }
}

export default App;
