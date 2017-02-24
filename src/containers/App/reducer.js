import { fromJS } from 'immutable';
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  products: false,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_PRODUCTS_SUCCESS:
      return state
        .set('products', action.payload.prods)
        .set('loading', false);
    case LOAD_PRODUCTS_ERROR:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
};

export default appReducer;
