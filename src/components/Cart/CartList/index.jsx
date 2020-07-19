import './CartList.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/';

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
      <div className="cart-list">
        <div className="cart-table">
          <div className="header">
            <div className="header-item">
              <h2>Nome</h2>
            </div>
            <div className="header-item">
              <h2>Preço</h2>
            </div>
            <div className="header-item">
              <h2>Preço c/ desconto</h2>
            </div>
            <div className="header-item">
              <h2>Quant.</h2>
            </div>
            <div className="header-item">
              <h2>Total</h2>
            </div>
          </div>
          {itemsList}
        </div>
      </div>
    )
  }
}

const mapStateToProps  = (state) => ({cart: state.cart})

export default connect(mapStateToProps)(CartList);
