import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem';

class CartList extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const cart = this.props.cart;
    let itemsList;
    if(cart.length > 0){
      itemsList = cart.map((item, index) => {
        return (
          <CartItem key={index}
                    order={item}/>
        );
      })
    } else {
      itemsList = <h1>Carrinho vazio</h1>;
    }

    return (
      <div>
        <h1>Cart List</h1>
        {itemsList}
      </div>
    )
  }
}

const mapStateToProps  = (state) => ({cart: state.cart})

export default connect(mapStateToProps)(CartList);
