import "./rhlConfig";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";
import { rootStore, Provider } from "@stores";

ReactDOM.render(
  <Provider value={rootStore}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// if (module.hot) {
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
