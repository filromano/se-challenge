import React, { Component } from 'react';

import Grid from '../template/Grid/';
import CartList from  './CartList/';
import cartImage from '../../images/cart.png';

class Cart extends Component {
  render() {
    return (
      <Grid title="Carrinho"
            image={cartImage}>
        <CartList />
      </Grid>
    )
  }
}

export default Cart;