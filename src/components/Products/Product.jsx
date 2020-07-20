import React, { Component } from 'react';
import { connect } from 'react-redux';


import Grid from '../template/Grid/Grid';
import ProductList from './ProductList/ProductList';
import Filter from './Filter/Filter';
import productsImage from '../../images/products.png';

class Product extends Component {

  constructor(props){
    super(props)
    this.state = {
      filter: '',
    }
  }

  changeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  render() {    

    return (
      <Grid title="Produtos"
            image={productsImage}>
        <Filter brands={this.props.brands}
                changeFilter={this.changeFilter}/>
        <ProductList filter={this.state.filter}/>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({brands: state.brands.items})

export default connect(mapStateToProps)(Product);