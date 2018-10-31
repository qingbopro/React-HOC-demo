import React from 'react'

export default props => (
  <div>
    <p>{props.count}</p>
    <button onClick={props.onAdd}>add</button>
    <button onClick={props.onMinus}>minus</button>
  </div>
)
