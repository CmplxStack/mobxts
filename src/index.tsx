import "./rhlConfig";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "@Views/App";
import * as serviceWorker from "./serviceWorker";
import { CounterStore } from "@Stores/Counter";

const store = CounterStore.create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
