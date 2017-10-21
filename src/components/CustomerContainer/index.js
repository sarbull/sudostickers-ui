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
  state = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    delivery: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="name"
            label="First Name"
            value={ this.state.firstName }
            onChange={ this.handleChange('firstName') }
            fullWidth
            margin="normal"
          />
          <TextField
            id="name"
            label="Last Name"
            value={ this.state.lastName }
            onChange={ this.handleChange('lastName') }
            fullWidth
            margin="normal"
          />
          <TextField
            id="name"
            label="Phone Number"
            value={ this.state.phone }
            onChange={ this.handleChange('phone') }
            fullWidth
            margin="normal"
          />
          <TextField
            id="multiline-flexible"
            label="Address"
            multiline
            rowsMax="4"
            value={this.state.address}
            onChange={this.handleChange('address')}
            fullWidth
            margin="normal"
          />
          <TextField id="select-currency-native"
                     select
                     label="Delivery"
                     value={this.state.delviery}
                     onChange={this.handleChange('delivery')}
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

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);