import React from 'react';

import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export default (props) => (
  <BrowserRouter>
    <Route exact path="/" component={Products} />
    <Route path="/cart" component={Cart}/>
  </BrowserRouter>
);
