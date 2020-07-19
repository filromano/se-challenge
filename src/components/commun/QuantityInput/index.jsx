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
    return (
      <div className="cart-quantity">
        <span className="remove"
              onClick={e => this.props.updateQuantityToCart(this.props.productId, this.props.packId, this.props.quantity - 1)}>-</span>
        <input className="amount" type="text" readOnly value={this.props.quantity}/>
        <span className="add"
              onClick={e => this.props.updateQuantityToCart(this.props.productId, this.props.packId, this.props.quantity + 1)}>+</span>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ updateQuantityToCart }, dispatch);

export default connect(null, mapDispatchToProps)(QuantityInput);