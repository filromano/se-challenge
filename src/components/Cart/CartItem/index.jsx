import './CartItem.scss';

import React from 'react';

import QuanityInput from '../../commun/QuantityInput';

export default (props) => {

  const { image, name, pack, productId, packId, quantity, total } = props;

  return (
    <div className="cart-item">
      <div className="image" style={{backgroundImage: `url(${image})`}}></div>
      <div className="description">
        <div className="info">
          <p className="name">{name}</p>
          <p className="details">Unidades.: {pack} || Desc: 30%</p>
        </div>
        <QuanityInput productId={productId}
                        packId={packId}
                        quantity={quantity}/>
        <p className="total">Preço: R${total.toFixed(2).replace('.', ',')}</p>
      </div>
    </div>
  );
}
