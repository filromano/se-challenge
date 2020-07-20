import React from 'react';

import Products from '../components/Products/Product';
import Cart from '../components/Cart/Cart';
import Menu from '../components/template/Menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';

export default (props) => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Products} />
    <Route path="/cart" component={Cart}/>
  </BrowserRouter>
);
