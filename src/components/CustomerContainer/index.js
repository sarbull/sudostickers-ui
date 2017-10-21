import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import TextField from 'material-ui/TextField';

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
          <TextField
            id="name"
            label="First Name"
            value={ order.firstName }
            onChange={ (e) => {
              this.handleChange('firstName', e.target.value);
            } }
            fullWidth
            margin="normal"
          />
          <TextField
            id="name"
            label="Last Name"
            value={ order.lastName }
            onChange={ (e) => {
              this.handleChange('lastName', e.target.value);
            } }
            fullWidth
            margin="normal"
          />
          <TextField
            id="name"
            label="Phone Number"
            value={ order.phone }
            onChange={ (e) => {
              this.handleChange('phone', e.target.value);
            } }
            fullWidth
            margin="normal"
          />
          <TextField
            id="multiline-flexible"
            label="Address"
            multiline
            rowsMax="4"
            value={ order.address }
            onChange={ (e) => {
              this.handleChange('address', e.target.value);
            } }
            fullWidth
            margin="normal"
          />
          <TextField id="select-currency-native"
                     select
                     label="Delivery"
                     value={ order.delivery }
                     SelectProps={{
                       native: true
                     }}
                     fullWidth
                     margin="normal">
            {deliveries.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
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