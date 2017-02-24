import { combineEpics } from 'redux-observable';

import appEpic from './containers/App/epics';
import {
  loadCartEpic,
  loadCartSuccessEpic
} from './containers/Cart/epics';

export default combineEpics(
  appEpic,
  loadCartEpic,
  loadCartSuccessEpic,
);
