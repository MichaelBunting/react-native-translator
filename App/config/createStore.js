import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

export default createStore(reducers, applyMiddleware(thunk));
