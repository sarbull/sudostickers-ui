import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';

const deliveries = [
  {
    value: 'FanCourier',
    label: 'FanCourier',
  }
];

class CustomerContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    this.props.updateField({
      [key]: value
    });
  };

  render() {
    const { order } = this.props;

    return (
      <div>
        <form noValidate autoComplete="off">
          <input type="text"
                 placeholder="First Name"
                 value={ order.firstName }
                 onChange={ (e) => {
                   this.handleChange('firstName', e.target.value);
                 }}/>
          <input type="text"
                 placeholder="Last Name"
                 value={ order.lastName }
                 onChange={ (e) => {
                   this.handleChange('lastName', e.target.value);
                 }}/>
          <input type="text"
                 placeholder="Phone Number"
                 value={ order.phone }
                 onChange={ (e) => {
                   this.handleChange('phone', e.target.value);
                 }}/>
          <input type="text"
                 placeholder="Address"
                 value={ order.address }
                 onChange={ (e) => {
                   this.handleChange('phone', e.target.value);
                 }}/>
          <select value={ order.delivery }>
            {deliveries.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ order }) {
  return {
    order
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);