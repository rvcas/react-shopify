import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'rxjs';

import configureStore from './store';

const store = configureStore({}, browserHistory);

import { selectLocationState } from './containers/App/selectors';

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

import App from './containers/App';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
