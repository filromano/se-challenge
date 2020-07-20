import './Filter.scss';

import React from 'react';

export default (props) => {

  const options = props.brands.map(brand=> (
    <option key={brand.id}
            value={brand.slug}>{
      brand.name}
    </option>
  ));


  return (
    <div className="filter">
      <select onChange={props.changeFilter}>
        <option value="">Filtrar</option>
        <option value="">Todos</option>
        {options}
      </select>
    </div>
  )
};
