import '../../style/ProductItem.css';

import React from 'react';

import Packs from './Packs';

export default (props) => (
  <div className="product-item">
    <div className="header">
      <p><strong>{props.name}</strong></p>
      <p>Cerveja Brahma 300ml</p>
    </div>
    <div className="image" style={{backgroundImage: `url(${props.image})`}}>
    </div>
    <Packs packs={props.packs}/>
    <button className="cart">Adicionar ao carrinho</button>
  </div>
);
