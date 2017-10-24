import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';

class Increment extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment(this.props.value);
  }

  decrement() {
    this.props.decrement(this.props.value);
  }

  render() {
    const { value } = this.props;

    return (
      <div>
        <h2>{ value }</h2>
        <button onClick={ this.increment }>
          Increment
        </button>
        <button onClick={ this.decrement }>
          Decrement
        </button>
      </div>
    );
  }
}

function mapStateToProps({increment}, action) {
  return {
    value: increment.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
