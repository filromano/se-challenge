import React, { Component } from 'react';
import { connect } from 'react-redux';


import Grid from '../template/Grid/';
import ProductList from './ProductList/';
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
    console.log(this.state)
    const option = this.props.brands.map(brand=> (
      <option key={brand.id}
              value={brand.slug}>{
        brand.name}
      </option>
    ));

    return (
      <Grid title="Produtos"
            image={productsImage}>
        <select onChange={this.changeFilter}>
          <option value="">Filtrar</option>
          {option}
        </select>
        <ProductList filter={this.state.filter}/>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({brands: state.brands.items})

export default connect(mapStateToProps)(Product);