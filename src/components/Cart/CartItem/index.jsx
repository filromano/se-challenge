import './CartItem.scss';

import React from 'react';

import QuanityInput from '../../commun/QuantityInput';

export default (props) => (
  <div className="cart-item">
    <div className="image" style={{backgroundImage: `url(${props.image})`}}></div>
    <div className="description">
      <div className="info">
        <p className="name">{props.name}</p>
        <p className="details">Unidades.: {props.pack} || Desc: 30%</p>
      </div>
      <QuanityInput productId={props.productId}
                      packId={props.packId}
                      quantity={props.quantity}/>
      <p className="total">Preço: R${props.total.toFixed(2).replace('.', ',')}</p>
    </div>
  </div>
);
