import './CartList.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';

import { setPercentage } from '../../../js/utils';

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

          // get pack Info
          const pack = product.packs.filter(pack => pack.id === item.packId)[0];

          //calculate total for Item
          const total = parseFloat((pack.current_price * item.quantity).toFixed(2));

          //calculatePercentage
          const percentage = setPercentage(pack.original_price, pack.current_price);

          //push total, to array with all totals
          totals.push(total)

          return (
            <CartItem key={index}
                      productId={product.id}
                      packId={pack.id}
                      image={product.image}
                      name={product.name}
                      pack={pack.unities}
                      percentage={percentage}
                      price={pack.current_price}
                      quantity={item.quantity}
                      total={total}/>
          ); 
        }
      })
    } else {
      itemsList = <h1>Carrinho vazio</h1>;
    }

    const finalPrice = totals.reduce((a, b) => a + b).toFixed(2).replace('.', ',');

    return (
      <div className="cart-list">
        <div className="cart-items">
          {itemsList}
        </div>
        <p className="final-price">Total a pagar: R${finalPrice}</p>
      </div>
    )
  }
}

const mapStateToProps  = (state) => ({cart: state.cart, products: state.products.items})

export default connect(mapStateToProps)(CartList);
