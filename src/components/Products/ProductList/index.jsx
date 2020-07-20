import './ProductList.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from '../ProductItem/';

class ProductList extends Component {

  constructor(props){
    super(props)
  }

  render() {

    const { filter, products } = this.props;

    const items = filter === '' ? products : products.filter(product => product.vendors[0].vendor.slug === filter)
    

    const list = items.map((item) => {

      return (
        <ProductItem key={item.id}
                     productId={item.id}
                     name={item.name}
                     vendor={item.vendors[0].vendor.name}
                     image={item.image}
                     packs={item.packs}/>
      )
    });
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