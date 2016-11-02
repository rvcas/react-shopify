import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectPing,
} from './selectors';

import { doPing } from './actions';
import './styles.css';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>is pinging: {this.props.isPinging.toString()}</h1>
        <button onClick={this.props.ping}>Start PING</button>
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}

App.propTypes = {
  isPinging: React.PropTypes.bool,
  ping: React.PropTypes.func,
  children: React.PropTypes.node,
};

const mapDispatchToProps = (dispatch) => {
  const dispatchProps = {
    ping: () => dispatch(doPing()),
    dispatch,
  };

  return dispatchProps;
};

const mapStateToProps = createStructuredSelector({
  isPinging: selectPing(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
