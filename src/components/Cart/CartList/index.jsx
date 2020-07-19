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
    const totals = [0];
    if(cart.length > 0){
      itemsList = cart.map((item, index) => {

        const product = this.props.products.filter(product => product.id === item.productId)[0];
        if(product) {
          const pack = product.packs.filter(pack => pack.id === item.packId)[0];
          const total = parseFloat((pack.current_price * item.quantity).toFixed(2));
          totals.push(total)
          return (
            <CartItem key={index}
                      name={product.name}/>
          ); 
        }
      })
    } else {
      itemsList = <h1>Carrinho vazio</h1>;
    }

    const finalPrice = totals.reduce((a, b) => a + b);

    return (
      <div className="cart-list">
        <div className="cart-table">
          <div className="header">
            <div className="header-item">
              <p>Nome</p>
            </div>
            <div className="header-item">
              <p>Preço</p>
            </div>
            <div className="header-item">
              <p>Preço c/ desconto</p>
            </div>
            <div className="header-item">
              <p>Quant.</p>
            </div>
            <div className="header-item">
              <p>Total</p>
            </div>
          </div>
          {itemsList}
        </div>
        <div>
          <p>{finalPrice}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps  = (state) => ({cart: state.cart, products: state.products.items})

export default connect(mapStateToProps)(CartList);
