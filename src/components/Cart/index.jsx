import React, { Component } from 'react';

import Grid from '../template/Grid/';
import CartList from  './CartList/';

class Cart extends Component {
  render() {
    return (
      <Grid title="Carrinho">
        <CartList />
      </Grid>
    )
  }
}

export default Cart;