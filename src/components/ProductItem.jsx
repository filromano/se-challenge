import '../style/ProductItem.css';

import React from 'react';

export default (props) => (
  <div className="product-item">
    <div className="header">
      <p><strong>Brahma</strong></p>
      <p>Cerveja Brahma 300ml</p>
    </div>
    <div>imagem</div>
    <div className="packs">
      <p>Escolha o seu pack</p>
    </div>
    <div className="prices">
      <p>desconto vlavlavlavl</p>
    </div>
    <button>Adicionar ao carrinho</button>
  </div>
);
