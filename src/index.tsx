import "./rhlConfig";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";
// import { observer } from 'mobx-react';
import { CounterStore } from "./stores/CounterStore";
import { types } from "mobx-state-tree";

export const RootStoreModel = types.model("ROOT_STORE", {
  COUNTER_STORE: types.optional(CounterStore, {}),
});
export const RootStore = () => RootStoreModel.create({});
export type IRootStore = typeof RootStore;
ReactDOM.render(
  // <Provider store={store}>
  // <Provider {...stores}>
  <Provider {...RootStore()}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

if (module.hot) {
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
