import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import logo from '@assets/logo.svg';
import './App.css';
class App extends Component {
  render(): JSX.Element {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
      </div>
    );
  }
}

export default hot(App);
