import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import "./App.css";
import { Counter } from "@Components/Counter";

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <Counter data-testid={"test-counter"} />
        </header>
      </div>
    );
  }
}

export default hot(App);
