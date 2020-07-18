import './Menu.scss';

import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default (props) => (
  <div className="navbar">
    <Link className="navbar-item" to="/">Produtos</Link>
    <Link className="navbar-item" to="/cart">Carrinho</Link>
  </div>
);
