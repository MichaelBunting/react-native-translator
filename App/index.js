import React from 'react';
import { Provider } from 'react-redux';

import store from './config/createStore';
import Root from './Root';

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
