import React, { Component } from 'react';

import CartList from  './CartList';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <h1>Cart</h1>
        <CartList />
      </div>
    )
  }
}

export default Cart;