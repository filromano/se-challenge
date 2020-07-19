import './CartItem.scss';

import React, { Component } from 'react';

class CartItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cart-items">
        {this.props.name}
      </div>
    )
  }
};

export default CartItem;