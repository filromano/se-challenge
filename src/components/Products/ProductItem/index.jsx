import './ProductItem.scss';

import React from 'react';

import Packs from '../Packs/';
import { defaultImage } from '../../../js/utils';

export default (props) => {

  const { vendor, name, image, productId, packs } = props;

  return (
    <div className="product-item">
      <div className="header">
        <p><strong>{vendor}</strong></p>
        <p>{name}</p>
      </div>
      <div className="image">
        <img onError={defaultImage} src={image} alt={name}/>
      </div>
      <Packs productId={productId}
             packs={packs}/>
    </div>
  )
};
