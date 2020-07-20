import './Grid.scss';

import React from 'react';

export default (props) => (
  <div className="content">
    <div className="title">
      <img className="icon" 
           src={props.image} alt=""/>
      <h1>{props.title}</h1>
    </div>
    {props.children}
  </div>
);
