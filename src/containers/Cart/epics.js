import { Observable as Obsv } from 'rxjs';

import shop from '../../utils/shop';

import {
  LOAD_PRODUCTS,
} from '../App/constants';

import {
  LOAD_CART,
} from './constants';

import {
  loadCart,
  loadCartSuccess,
  loadCartError
} from './actions.js';

const { createCart } = shop();

const loadCartEpic = action$ =>
  action$.ofType(LOAD_PRODUCTS)
         .mapTo(loadCart());

const loadCartSuccessEpic = action$ =>
  action$.ofType(LOAD_CART)
         .mergeMap(() =>
           Obsv.from(createCart)
               .map(loadCartSuccess)
               .catch(loadCartError)
         );

export {
  loadCartEpic,
  loadCartSuccessEpic,
};
