import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: null
    }
  }

  getProductValues = () => {
    const { productId } = this.props.order;
    const product = this.props.products.filter(product => product.id === productId)[0];
    return ({
      product
    })
    
  }

  render() {
    const item = this.getProductValues();
    console.log(item)
    return (
      <div>
        <h1>{item.product.name}</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({products: state.products.items})

export default connect(mapStateToProps)(CartItem);