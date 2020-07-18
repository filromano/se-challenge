import React from 'react';

import Products from '../components/Products/';
import Cart from '../components/Cart/Cart';
import Menu from '../components/template/Menu/';
import { BrowserRouter, Route } from 'react-router-dom';

export default (props) => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Products} />
    <Route path="/cart" component={Cart}/>
  </BrowserRouter>
);
