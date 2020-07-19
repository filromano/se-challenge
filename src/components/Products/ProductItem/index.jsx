import './ProductItem.scss';

import React from 'react';

import Packs from '../Packs/';

export default (props) => {

  const { vendor, name, image, productId, packs } = props;

  return (
    <div className="product-item">
      <div className="header">
        <p><strong>{vendor}</strong></p>
        <p>{name}</p>
      </div>
      <div className="image" style={{backgroundImage: `url(${image})`}}>
      </div>
      <Packs productId={productId}
             packs={packs}/>
    </div>
  )
};
