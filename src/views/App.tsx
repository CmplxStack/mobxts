import React from "react";
import { hot } from "react-hot-loader/root";
import logo from "~Assets/logo.svg";
import "./App.css";
import { Counter, Counter2 } from "~Components";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Counter2 />
      </header>
    </div>
  );
};

export default hot(App);
