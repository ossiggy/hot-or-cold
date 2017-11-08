import React from 'react'

import './top-nav.css'

export default function TopNav(props){
  return(
    <nav>
      <ul className="nav-list"> 
        <li>
          <a href="#what" className="what">WHAT?</a>
        </li>
        <li>
          <a href="#" onClick={()=>props.restart()} className="new">+NEW GAME</a>
        </li>
      </ul>
    </nav>
  )
}