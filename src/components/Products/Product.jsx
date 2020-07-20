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
      searchBox: '',
    }
  }

  changeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  searchBox = (value) => {
    this.setState({searchBox: value})
  }

  render() {    

    return (
      <Grid title="Produtos"
            image={productsImage}>
        <Filter brands={this.props.brands}
                changeFilter={this.changeFilter}
                searchBox={this.searchBox}/>
        <ProductList filter={this.state.filter}
                     searchBox={this.state.searchBox}/>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({brands: state.brands.items})

export default connect(mapStateToProps)(Product);