import '../style/ProductList.css';

import React, { Component } from 'react';

import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Produtos</h1>
        <div className="product-list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    );
  }
}

export default ProductList;