import '../../style/ProductItem.css';

import React from 'react';

export default (props) => (
  <div className="product-item">
    <div className="header">
      <p><strong>{props.name}</strong></p>
      <p>Cerveja Brahma 300ml</p>
    </div>
    <div className="image" style={{backgroundImage: `url(${props.image})`}}>
    </div>
    <div className="packs">
      <p>Escolha o seu pack</p>
      <div className="options">
        <button>15 Unid.</button>
        <button>30 Unid.</button>
        <button>60 Unid.</button>
      </div>
    </div>
    <div className="prices">
      <span><strong>DESC.:</strong>
        <span className="discount"> 30%</span>
      </span>
      <span><strong>DE:</strong>
        <span className="original-price"> R$ 68,70</span>
      </span>
      <span><strong>POR:</strong>
        <span className="final-price"> R$ 53,70</span>
      </span>
    </div>
    <button className="cart">Adicionar ao carrinho</button>
  </div>
);
