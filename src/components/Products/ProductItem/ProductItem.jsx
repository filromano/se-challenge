import './ProductItem.scss';

import React from 'react';

import Packs from '../Packs/Packs';
import Emblem from '../../commun/Emblem/Emblem';
import { defaultImage, setPercentage } from '../../../js/utils';

export default (props) => {

  const { vendor, name, image, productId, packs } = props;

  const percentage = setPercentage(packs[0].original_price, packs[0].current_price);

  return (
    <div className="product-item">
      <div className="header">
        <p><strong>{vendor}</strong></p>
        <p>{name}</p>
      </div>
      <div className="image">
        <img onError={defaultImage} src={image} alt={name}/>
        <Emblem percentage={percentage}/>
      </div>
      <Packs productId={productId}
             packs={packs}
             percentage={percentage}/>
    </div>
  )
};
