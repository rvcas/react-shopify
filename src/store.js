import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import createReducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);
const devtools = window.devToolsExtension || (() => (noop) => noop)

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    epicMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  return store;
}
