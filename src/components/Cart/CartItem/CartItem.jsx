import './CartItem.scss';

import React from 'react';

import QuanityInput from '../../commun/QuantityInput/QuantityInput';
import Emblem from '../../commun/Emblem/Emblem';
import { defaultImage } from '../../../js/utils';

export default (props) => {

  const { image, name, pack, percentage, productId, packId, quantity, total } = props;

  return (
    <div className="cart-item">
      <div className="image">
        <img onError={defaultImage} src={image} alt={name}/>
        <Emblem percentage={percentage}/>
      </div>
      <div className="description">
        <div className="info">
          <p className="name">{name}</p>
            <p className="details">Unidades.: {pack} || Desc: {percentage}%</p>
        </div>
        <QuanityInput productId={productId}
                        packId={packId}
                        quantity={quantity}/>
        <p className="total">Preço: R${total.toFixed(2).replace('.', ',')}</p>
      </div>
    </div>
  );
}
