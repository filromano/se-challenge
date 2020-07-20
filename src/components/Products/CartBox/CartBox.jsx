import './CartBox.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuantityInput from  '../../commun/QuantityInput/QuantityInput';

import { addToCart } from '../../../store/actions/cart';

class AddToCart extends Component {

  render() {

    let button;
    const { cart, productId, packId, addToCart } = this.props;

    const check = cart.filter((item) => item.productId === productId && item.packId === packId);

    if(check.length > 0) {
      button =  <QuantityInput productId={check[0].productId}
                               packId={check[0].packId}
                               quantity={check[0].quantity}/>
    } else {
      button = <button className="cart-button" 
                      onClick={e => addToCart(productId, packId, 1)}>
                  Adicionar ao carrinho
                </button>
    }

    return (
      <div className="cart-box">
        {button}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({cart: state.cart});

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);