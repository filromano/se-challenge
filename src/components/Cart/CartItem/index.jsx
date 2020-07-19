import './CartItem.scss';

import React from 'react';

export default (props) => (
  <div className="cart-item">
    <div className="image" style={{backgroundImage: `url(${props.image})`}}></div>
    <div className="description">
      <p>{props.name}</p>
      <p>Unidades.: {props.pack} || Desc: 30%</p>
      <p>Preço: {props.total}</p>
    </div>
  </div>
);
