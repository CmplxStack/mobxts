import React, { Component } from "react";
import { hot } from "react-hot-loader";
import logo from "@assets/logo.svg";
import "./App.css";
import { Counter } from "@components/Counter";
// import { observer } from 'mobx-react';

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Counter />
          {/* {Counter()} */}
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
