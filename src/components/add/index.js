import React from 'react';

export default props => (
  <div>
    <p>{props.count}</p>
    <button onClick={props.onClick}>add</button>
  </div>
);
