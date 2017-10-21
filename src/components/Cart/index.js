import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

export default class Cart extends Component {
  renderRows() {
    const { items } = this.props;

    return items.map(i => {
      return (
        <TableRow key={i.id}>
          <TableCell>#{i.id}</TableCell>
          <TableCell>{i.name}</TableCell>
          <TableCell>{i.price}</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
      );
    });
  }

  renderTable() {
    return (<Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { this.renderRows() }
        </TableBody>
      </Table>
    </Paper>);
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        { (items.length > 0) && (
          this.renderTable()
        ) }

        { !items.length && (
          <p>Cart is empty.</p>
        ) }
      </div>
    );
  }
}
