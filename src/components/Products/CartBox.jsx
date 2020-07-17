import '../../style/CartBox.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../../store/actions/cart';

class AddToCart extends Component {



  render() {

    let button;

    const check = this.props.cart.filter((item) => item.productId === this.props.productId && item.packId === this.props.packId);
    console.log(check);
    if(check.length > 0) {
      button =  <div className="cart-quantity">
                  <span className="remove">-</span>
                  <input className="amount" type="text" readOnly value={check[0].quantity}/>
                  <span className="add">+</span>
                </div>
    } else {
      button = <button className="cart-button" 
                      onClick={e => this.props.addToCart(this.props.productId, this.props.packId, 1)}>
                  Adicionar ao carrinho
                </button>
    }

    const buttons = this.props.cart.filter((item) => {
      if(item.productId === this.props.productId && item.packId === this.props.packId) {
        return (
          <div className="cart-quantity">
            <span className="remove">-</span>
            <input className="amount" type="text" readOnly value={item.quantity}/>
            <span className="add">+</span>
          </div>
        )
      } else {
        return (
          <button className="cart-button" 
                  onClick={e => this.props.addToCart(this.props.productId, this.props.packId, 1)}>
            Adicionar ao carrinho
          </button>
        )
      }
    });

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