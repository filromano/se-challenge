import './ProductList.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductItem from '../ProductItem/';
import { getProducts } from '../../../store/actions/products';

class ProductList extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const list = this.props.products.map((item) => (
      <ProductItem key={item.id}
                   productId={item.id}
                   name={item.name}
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
const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ getProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);