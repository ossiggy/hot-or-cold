import React from 'react'

import './guess-list.css'

export default function GuessList(props){
  const guesses = props.guesses.map((guess, index) => 
  <li key={index}>{guess}</li>
  )
  return(
    <div className='guess-list'>
      <h3>Guess #{guesses.length}!</h3>
        <ul className="guess-boxes">
          {guesses}
        </ul>
    </div>
  )
}