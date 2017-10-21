import React, { Component } from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

export default class Cart extends Component {
  renderRows() {
    const {
      items,
      removeFromCart
    } = this.props;

    return items.map(i => {
      return (
        <TableRow key={ i.guid }>
          <TableCell>#{i.id}</TableCell>
          <TableCell>{i.name}</TableCell>
          <TableCell>
            {i.price}
            { (typeof i.price === 'number') && (
              ' RON'
            )}
          </TableCell>
          <TableCell>1</TableCell>
          <TableCell>
            { (i.guid !== 'guid') && (<IconButton aria-label="Delete"
                        onClick={() => {
                          removeFromCart(i);
                        }}>
              <DeleteIcon />
            </IconButton>)}
          </TableCell>
        </TableRow>
      );
    });
  }

  sumPrices() {
    const { items } = this.props;

    return items.map((o) => {
      if(typeof o.price === 'number') {
        return o.price;
      } else {
        return 0;
      }
    }).reduce((a, b) => {
      return a + b;
    }, 0);
  }

  renderTableFooter() {
    const {
      items,
      emptyCart
    } = this.props;

    return (<TableFooter>
      <TableRow>
        <TableCell>
          <strong>Total</strong>
        </TableCell>
        <TableCell></TableCell>
        <TableCell>{ this.sumPrices() } RON</TableCell>
        <TableCell>{ items.length }</TableCell>
        <TableCell>
          <IconButton aria-label="Delete"
                      onClick={ emptyCart }>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableFooter>);
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
        { this.renderTableFooter() }
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
