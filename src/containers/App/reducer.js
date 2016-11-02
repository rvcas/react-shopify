import { fromJS } from 'immutable';
import {
  PING,
  PONG,
} from './constants';


const initialState = fromJS({
  isPinging: false,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case PING:
      return state
        .set('isPinging', true);
    case PONG:
      return state
        .set('isPinging', false);
    default:
      return state;
  }
};

export default appReducer;
