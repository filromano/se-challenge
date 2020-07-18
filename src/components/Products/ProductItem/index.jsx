import './ProductItem.scss';

import React from 'react';

import Packs from '../Packs/';

export default (props) => {
  return (
    <div className="product-item">
      <div className="header">
        <p><strong>{props.name}</strong></p>
        <p>Cerveja Brahma 300ml</p>
      </div>
      <div className="image" style={{backgroundImage: `url(${props.image})`}}>
      </div>
      <Packs productId={props.productId}
             packs={props.packs}/>
    </div>
  )
};
