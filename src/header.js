import React from 'react'

import Game from './game'
import GuessArea from './guess-area'

export default function Header(){
    return (
      <header className="header">
        <h1>HOT or COLD</h1>
          <nav>
            <ul className="nav-list"> 
              <li>
                <a href="#" className="what">WHAT?</a>
              </li>
              <li>
                <a href="#" className="new">+NEW GAME</a>
              </li>
            </ul>
          </nav>
      </header>
    )
}


