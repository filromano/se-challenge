import './CartItem.scss';

import React from 'react';

import QuanityInput from '../../commun/QuantityInput';

export default (props) => (
  <div className="cart-item">
    <div className="image" style={{backgroundImage: `url(${props.image})`}}></div>
    <div className="description">
      <p>{props.name}</p>
      <p>Unidades.: {props.pack} || Desc: 30%</p>
      <QuanityInput productId={props.productId}
                    packId={props.packId}
                    quantity={props.quantity}/>
      <p>Preço: {props.total}</p>
    </div>
  </div>
);
