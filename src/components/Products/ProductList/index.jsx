import './ProductList.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from '../ProductItem/';

class ProductList extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const list = this.props.products.map((item) => (
      <ProductItem key={item.id}
                   productId={item.id}
                   name={item.name}
                   vendor={item.vendors[0].vendor.name}
                   image={item.image}
                   packs={item.packs}/>
    ));
    return (
      <div>
        <div className="product-list">
          {list}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({products: state.products.items});

export default connect(mapStateToProps)(ProductList);