import React from 'react'

export default function GuessList(props){
  const guesses = props.guesses.map((guess, index) => 
  <li key={index}>{guess}</li>
  )
  return(
    <div>
      <h3>You have made {guesses.length} guesses</h3>
        <ul>
          {guesses}
        </ul>
    </div>
  )
}