import './QuantityInput.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateQuantityToCart } from '../../../store/actions/cart';

class QuantityInput extends Component {

  constructor(props){
    super(props)
  }

  render() {

    const { productId, packId, quantity, updateQuantityToCart } = this.props;

    return (
      <div className="cart-quantity">
        <span className="remove"
              onClick={e => updateQuantityToCart(productId, packId, quantity - 1)}>-</span>
        <input className="amount" type="text" readOnly value={quantity}/>
        <span className="add"
              onClick={e => updateQuantityToCart(productId, packId, quantity + 1)}>+</span>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ updateQuantityToCart }, dispatch);

export default connect(null, mapDispatchToProps)(QuantityInput);