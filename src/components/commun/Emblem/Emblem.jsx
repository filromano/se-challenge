import './Emblem.scss';

import React from 'react';

export default (props) => {

  const emblem = props.percentage > 15 ?
     <span className="emblem">com {props.percentage}% off</span> : 
     '';

  return (
    <div>
      {emblem}
    </div>
  )
};
