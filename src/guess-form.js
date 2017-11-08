import React from 'react'

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
      <form className="guess-form" onSubmit={(e)=>this.onSubmit(e)}>
        <input type="text" ref={input => this.guessValue=input} placeholder="Enter your Guess" />
        <button type="submit">Guess</button>
      </form>
    )
  }

}