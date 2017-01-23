/**
 * Created by corentin on 20/01/17.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './routes';
import { browserHistory } from 'react-router';

import configureStore from './store/configureStore';
const store = configureStore();

render (
  <Provider store={store}>
    <Root history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);