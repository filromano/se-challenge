import './ProductItem.scss';

import React from 'react';

import Packs from '../Packs/';

export default (props) => {
  return (
    <div className="product-item">
      <div className="header">
        <p><strong>{props.vendor}</strong></p>
        <p>{props.name}</p>
      </div>
      <div className="image" style={{backgroundImage: `url(${props.image})`}}>
      </div>
      <Packs productId={props.productId}
             packs={props.packs}/>
    </div>
  )
};
