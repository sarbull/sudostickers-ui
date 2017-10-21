import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RemoveIcon from 'material-ui-icons/Remove';
import Button from 'material-ui/Button';

export default class Cart extends Component {


  renderRows() {
    const {
      items,
      removeFromCart
    } = this.props;

    console.log('items', items);

    return items.map(i => {
      return (
        <TableRow key={ i.guid }>
          <TableCell>#{i.id}</TableCell>
          <TableCell>{i.name}</TableCell>
          <TableCell>{i.price}</TableCell>
          <TableCell>1</TableCell>
          <TableCell>
            <Button fab
                    color="primary"
                    aria-label="remove"
                    onClick={() => {
                      removeFromCart(i);
                    }}>
              <RemoveIcon />
            </Button>
          </TableCell>
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
            <TableCell>Options</TableCell>
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
