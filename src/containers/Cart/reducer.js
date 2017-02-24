import { fromJS } from 'immutable';

import {
  LOAD_CART,
  LOAD_CART_SUCCESS,
  LOAD_CART_ERROR,
  ADD_ITEM,
  ADD_ITEM_DONE,
  DELETE_ITEM,
  DELETE_ITEM_DONE,
} from './constants';

const initialState = fromJS({
  changing: false,
  loading: false,
  error: false,
  items: false,
});

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_CART_SUCCESS:
      return state
        .set('items', action.payload.cart)
        .set('loading', false);
    case LOAD_CART_ERROR:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    case ADD_ITEM:
      return state
        .set('changing', true);
    case ADD_ITEM_DONE:
      return state
        .set('items', action.payload.cart)
        .set('changing', false);
    case DELETE_ITEM:
      return state
        .set('changing', true);
    case DELETE_ITEM_DONE:
      return state
        .set('items', action.payload.cart)
        .set('changing', false);
    default:
      return state;
  }
};

export default cartReducer;
