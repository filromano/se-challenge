import './ProductList.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {

  constructor(props){
    super(props)
  }

  render() {

    const { filter, products, searchBox } = this.props;

    // filter
    let items = filter === '' ? products : products.filter(product => product.vendors[0].vendor.slug === filter)

    //after filter apply searchBox
    items = searchBox === '' ? items : items.filter(item => item.name.toLowerCase().includes(searchBox.toLowerCase()));

    

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