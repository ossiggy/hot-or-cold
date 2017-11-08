import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();

// what do we need?:
// component for what? button - updates DOM with game instructions and a 'got it' button
// component for guess area input - get value of input
// component to compare input to secret number
// secret number generator
// running log of guesses (# of guesses and what numbers were guessed)
// range for cold, kinda hot, hot
// component for new game which clears board