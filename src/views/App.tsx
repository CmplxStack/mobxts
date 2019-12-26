import React from "react";
import { hot } from "react-hot-loader/root";
import logo from "@assets/logo.svg";
import "./App.css";
import { Counter, Counter2 } from "@components/Counter";

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
