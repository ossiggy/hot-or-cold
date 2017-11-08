import React from 'react'

import './guess-form.css'

export default class GuessForm extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  onSubmit(event) {
    event.preventDefault()
    const guessValue = this.guessValue.value.trim()
    if(guessValue&&this.props.onAdd) {
      this.props.onAdd(guessValue)
    }
    this.guessValue.value='';
  }

  render(){
    return(
      <form className='guess-input' onSubmit={(e)=>this.onSubmit(e)}>
        <input
          className="guess-input" 
          type="number" 
          min='1'
          max='100'
          ref={input => this.guessValue=input} 
          placeholder="Enter your Guess" />
        <button type="submit">Guess</button>
      </form>
    )
  }

}