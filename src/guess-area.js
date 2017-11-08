import React from 'react'

import GuessForm from './guess-form'
import Temperature from './temperature'

export default function GuessArea(props){
  return (
    <div className="game-board">
      <Temperature temp={props.temp} />
      <GuessForm onAdd={guess=>props.onAdd(guess)} />
    </div>
  );
}