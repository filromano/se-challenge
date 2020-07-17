import '../../style/CartBox.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart, updateQuantityToCart } from '../../store/actions/cart';

class AddToCart extends Component {



  render() {

    let button;

    const check = this.props.cart.filter((item) => item.productId === this.props.productId && item.packId === this.props.packId);

    if(check.length > 0) {
      button =  <div className="cart-quantity">
                  <span className="remove"
                        onClick={e => this.props.updateQuantityToCart(check[0].productId, check[0].packId, check[0].quantity - 1)}>-</span>
                  <input className="amount" type="text" readOnly value={check[0].quantity}/>
                  <span className="add"
                        onClick={e => this.props.updateQuantityToCart(check[0].productId, check[0].packId, check[0].quantity + 1)}>+</span>
                </div>
    } else {
      button = <button className="cart-button" 
                      onClick={e => this.props.addToCart(this.props.productId, this.props.packId, 1)}>
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
  bindActionCreators({ addToCart, updateQuantityToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);