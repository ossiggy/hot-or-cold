import React from 'react'

import Header from './header'
import GuessArea from './guess-area'
import GuessList from './guess-list'
import Information from './information-section'

export default class Game extends React.Component{
constructor(props){
  super(props);
  
  this.state={
    guesses: [],
    secretNumber: Math.floor(Math.random()*100)+1,
    temp: 'Make Your Guess'
  }
}

  restartGame() {
    this.setState({
      guesses: [],
      secretNumber: Math.floor(Math.random()*100)+1,
      temp: 'Make Your Guess'
    })
  }

  addGuess(guess){
    let temp;
    const difference = Math.abs(guess-this.state.secretNumber)
    if(difference<=5){
      temp= 'Hot!'
    }
    if(difference<=15&&difference>5){
      temp = 'Very Warm'
    }
    if(difference<=25&&difference>15){
      temp = 'Getting Warmer'
    }
    if(difference>25){
      temp = 'Cold'
    }
    if(difference===0){
      temp ='Winner! Press "NEW GAME" to play again!'
    }
    if(isNaN(guess)){
      alert('must be a number!')
      return
    }

    for(let i=0; i<this.state.guesses.length; i++){
      if(guess===this.state.guesses[i]){
        alert('You already guessed this number!')
        return
      }
    }

    this.setState({
      guesses: [...this.state.guesses, guess],
      temp
    })
  }

  render(){
    return (
      <div className="game">
        <Header restart={() => this.restartGame()} />
        <GuessArea temp={this.state.temp} onAdd={guess=>this.addGuess(guess)} />
        <GuessList guesses={this.state.guesses} />
        <Information />
      </div>
    )
  }
}