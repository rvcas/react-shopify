import { Observable as Obsv } from 'rxjs';

import shop from '../../utils/shop';

import {
  LOAD_PRODUCTS,
} from './constants';

import {
  productsLoaded,
  productLoadingError,
} from './actions';

const { all } = shop();

const appEpic = action$ =>
  action$.ofType(LOAD_PRODUCTS)
         .mergeMap( () =>
           Obsv.from(all('products'))
               .map(productsLoaded)
               .catch(productLoadingError)
         );

export default appEpic;
