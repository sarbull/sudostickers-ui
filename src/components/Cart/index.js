import React, { Component } from 'react';

export default class Cart extends Component {
  renderRows() {
    const {
      items,
      removeFromCart
    } = this.props;

    return items.map(i => {
      return (
        <tr key={ i.guid }>
          <td>#{ i.id }</td>
          <td>{ i.name }</td>
          <td>
            { i.price }
            { (typeof i.price === 'number') && (
              ' RON'
            )}
          </td>
          <td>1</td>
          <td>
            { (i.guid !== 'guid') && (<button onClick={() => {
              removeFromCart(i);
            }}>Remove</button>)}
          </td>
        </tr>
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

    return (<tfoot>
      <tr>
        <td>
          <strong>Total</strong>
        </td>
        <td></td>
        <td>{ this.sumPrices() } RON</td>
        <td>{ items.length }</td>
        <td>
          <button onClick={ emptyCart }>Remove</button>
        </td>
      </tr>
    </tfoot>);
  }

  renderTable() {
    return (
      <table>
        <thead>
          <th>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Qty</td>
            <td>Options</td>
          </th>
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
        { this.renderTableFooter() }
      </table>);
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
