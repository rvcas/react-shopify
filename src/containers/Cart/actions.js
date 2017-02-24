import {
  LOAD_CART,
  LOAD_CART_SUCCESS,
  LOAD_CART_ERROR,
  ADD_ITEM,
  ADD_ITEM_DONE,
  DELETE_ITEM,
  DELETE_ITEM_DONE,
} from './constants';

export const loadCart = () => {
  return {
    type: LOAD_CART,
  }
};

export const loadCartSuccess = cart => {
  return {
    type: LOAD_CART_SUCCESS,
    payload: {
      cart,
    },
  };
};

export const loadCartError = error => {
  return {
    type: LOAD_CART_ERROR,
    payload: {
      error,
    },
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: {
      item,
    },
  };
};

export const addItemDone = cart => {
  return {
    type: ADD_ITEM_DONE,
    payload: {
      cart,
    },
  };
};

export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    payload: {
      item,
    },
  };
};

export const deleteItemDone = cart => {
  return {
    type: DELETE_ITEM_DONE,
    payload: {
      cart,
    },
  };
};
