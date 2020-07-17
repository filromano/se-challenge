import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartList extends Component {

  constructor(props){
    super(props)
  }

  render() {

    let itemsList;
    if(this.props.cart.length > 0){
      console.log('here');
    } else {
      itemsList = <h1>Carrinho vazio</h1>;
    }

    return (
      <div>
        <h1>Cart List</h1>
        {itemsList}
      </div>
    )
  }
}

const mapStateToProps  = (state) => ({cart: state.products.cart})

export default connect(mapStateToProps)(CartList);
