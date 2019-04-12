import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
// import { observer } from 'mobx-react';
import { CounterStore } from './stores/CounterStore';

const store = CounterStore.create();

// const App = observer((): JSX.Element => <Root store={store} />);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
