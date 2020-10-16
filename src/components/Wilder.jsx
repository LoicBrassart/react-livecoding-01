import React from 'react';

export default function Wilder(props) {
    return (
        <li>
          <h3>{props.name}</h3>
          <p>Sa vie, son oeuvre...</p>
          <ul>
          <li>Plat1</li>
          <li>Plat2</li>
          <li>Plat3</li>
          <li>Plat4</li>
          </ul>
        </li>
    )
}
