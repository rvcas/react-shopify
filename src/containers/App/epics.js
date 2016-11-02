import {
  PING,
} from './constants';
import { doPong } from './actions';

const pingEpic = action$ =>
  action$.ofType(PING)
         .delay(1000)
         .mapTo(doPong());

export default pingEpic;
