import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import appReducer from './containers/App/reducer';
import cartReducer from './containers/Cart/reducer';

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
};

const createReducer = () =>
  combineReducers({
    route: routeReducer,
    app: appReducer,
    cart: cartReducer,
  });

export default createReducer;
