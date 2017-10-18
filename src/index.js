import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './service-workers/registerServiceWorker';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
