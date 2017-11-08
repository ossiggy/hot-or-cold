import React from 'react'

export default function TopNav(props){
  return(
    <nav>
      <ul className="nav-list"> 
        <li>
          <a href="#what" className="what">WHAT?</a>
        </li>
        <li>
          <a href="#" className="new">+NEW GAME</a>
        </li>
      </ul>
    </nav>
  )
}