import { createStore, applyMiddleware, compose } from 'redux';

import appReducer from './reducers';

/* eslint-disable-next-line */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware()),
);
