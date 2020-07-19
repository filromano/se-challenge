import React from 'react';


import Grid from '../template/Grid/';
import ProductList from './ProductList/';
import productsImage from '../../images/products.png';

export default (props) => (
  <Grid title="Produtos"
        image={productsImage}>
    <ProductList />
  </Grid>
)