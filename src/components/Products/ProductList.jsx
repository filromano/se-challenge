import '../../style/ProductList.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductItem from './ProductItem';
import { getProducts } from '../../store/actions/products';

class ProductList extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getProducts();
    console.log(this.props);
  }

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

const mapStateToProps = (state) => ({products: state.products});
const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ getProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);