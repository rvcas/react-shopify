import {
  PING,
  PONG,
} from './constants';

export const doPing = () => {
  return {
    type: PING,
  };
};

export const doPong = () => {
  return {
    type: PONG,
  };
};
