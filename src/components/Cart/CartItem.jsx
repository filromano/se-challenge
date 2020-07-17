import React, { Component } from 'react';

class CartItem extends Component {

  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Teste</h1>
      </div>
    )
  }
};

export default CartItem;