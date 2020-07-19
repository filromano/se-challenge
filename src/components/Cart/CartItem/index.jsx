import './CartItem.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartItem extends Component {

  constructor(props) {
    super(props)
  }

  calculateTotalItem = (price) => {
    return price * this.props.order.quantity;
  }

  render() {
    let item;
    //get the product info
    const product = this.props.products.filter(product => product.id === this.props.order.productId)[0];
    
    if(product){
      //get packInfo
      const pack = product.packs.filter(pack => pack.id === this.props.order.packId)[0];
      const total = this.calculateTotalItem(pack.current_price);

      item =  <div className="cart-item">
                 <div>
                  <p>{product.name}</p>
                </div>
                <div>
                  <p>{pack.original_price}</p>
                </div>
                <div>
                  <p>{pack.current_price}</p>
                </div>
                <div>
                  <p>{this.props.order.quantity}</p>
                </div>
                <div>
                  <p>{total}</p>
                </div>
              </div>
    }

    return (
      <div className="cart-items">
        {item}
      </div>
    )
  }
};

const mapStateToProps = (state) => ({products: state.products.items})

export default connect(mapStateToProps)(CartItem);