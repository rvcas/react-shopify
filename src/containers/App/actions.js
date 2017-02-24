import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
} from './constants';

export const loadProducts = () => {
  return {
    type: LOAD_PRODUCTS,
  };
};

export const productsLoaded = prods => {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    payload: {
      prods,
    },
  };
}

export const productLoadingError = error => {
  return {
    type: LOAD_PRODUCTS_ERROR,
    payload: {
      error,
    },
  };
}
