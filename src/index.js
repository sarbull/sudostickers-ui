import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './service-workers/registerServiceWorker';
import { promiseMiddleware } from './api/promiseMiddleware';

const middlewareBuilder = () => {
  const universalMiddleware = [
    promiseMiddleware
  ];

  return [applyMiddleware(...universalMiddleware)];
};

const finalCreateStore = compose(
  ...middlewareBuilder()
)(createStore);

const store = finalCreateStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
