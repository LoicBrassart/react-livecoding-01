import React from 'react';
import Wilder from './components/Wilder'

export default function App() {

  const wilders = ["Nordine", "Amélie", "Gaetan", "Alexis", "Marie", "Thomas", "Thomas", "Thomas"];

  return (
    <div className="App">
      <ul>
        {wilders.map( (wilder, idx)=>{
          return <Wilder key={idx} name={wilder}/>
        } )}
      </ul>
    </div>
  );
}

