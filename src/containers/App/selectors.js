import { createSelector } from 'reselect';

const selectApp = () => (state) => state.get('app');

const selectPing = () => createSelector(
  selectApp(),
  (appState) => appState.get('isPinging'),
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectPing,
  selectLocationState,
};
