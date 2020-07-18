import './Grid.scss';

import React from 'react';

export default (props) => (
  <div className="content">
    <h1 className="title">{props.title}</h1>
    {props.children}
  </div>
);
