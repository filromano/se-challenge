import '../../style/ProductItem.css';

import React from 'react';

export default (props) => (
  <div className="product-item">
    <div className="header">
      <p><strong>Brahma</strong></p>
      <p>Cerveja Brahma 300ml</p>
    </div>
    <div className="image">
      <img src="https://cdn.shopify.com/s/files/1/0010/3150/3987/products/Enrrgetico_fusion_250ml_Lata.png?v=1565713637" alt="place"/>
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
