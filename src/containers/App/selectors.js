import { createSelector } from 'reselect';

const selectApp = () => (state) => state.get('app');

const selectPing = () => createSelector(
  selectApp(),
  (appState) => appState.get('isPinging'),
);

const selectError = () => createSelector(
  selectApp(),
  (appState) => appState.get('error'),
);

const selectLoading = () => createSelector(
  selectApp(),
  (appState) => appState.get('loading'),
);

const selectProducts = () => createSelector(
  selectApp(),
  (appState) => appState.get('products'),
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
  selectError,
  selectLoading,
  selectProducts,
  selectLocationState,
};
