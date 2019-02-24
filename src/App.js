// . directory is 'here' which is /src
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Posts from './components/Posts';
import PostForm from './components/Postform';

// Redux libraries
import { Provider } from 'react-redux';

// Store import
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <PostForm />
            <br />
            <hr />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
