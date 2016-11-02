import { combineEpics } from 'redux-observable';

import appEpic from './containers/App/epics';

export default combineEpics(
  appEpic,
);
