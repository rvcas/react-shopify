import { createSelector } from 'reselect';

import {
  selectProducts,
  selectLocationState,
} from '../App/selectors'

const selectSlug = () => createSelector(
  selectLocationState(),
  (location) => location.locationBeforeTransitions.pathname.split("/").pop()
);

const selectProductBySlug = () => createSelector(
  selectProducts(),
  selectSlug(),
  (products, slug) => products && products.find(prod => prod.attrs.handle === slug)
);

export {
  selectSlug,
  selectProductBySlug,
};
