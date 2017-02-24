import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'sanitize.css/sanitize.css';
import 'rxjs';

import configureStore from './store';

const store = configureStore({}, browserHistory);

import { selectLocationState } from './containers/App/selectors';

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});


import App from './containers/App';
import LandingPage from './containers/LandingPage';
import ProductsPage from './containers/ProductsPage';
import ProductPage from './containers/ProductPage';
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';
import TermsPage from './containers/TermsPage';

import {
  loadProducts,
} from './containers/App/actions';

const onEnterAction = (store, dispatchAction) =>
  (nextState, replace) => store.dispatch(dispatchAction());

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} onEnter={onEnterAction(store, loadProducts)}>
        <IndexRoute component={LandingPage} />
        <Route path="products" component={ProductsPage} />
        <Route path="products/:handle" component={ProductPage} />
        <Route path="about" component={AboutPage} />
        <Route path="contact" component={ContactPage} />
        <Route path="terms" component={TermsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
