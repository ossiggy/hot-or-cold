import React from 'react'

import TopNav from './top-nav'

import './header.css'

export default function Header(props){
    return (
      <header className="header">
        <TopNav restart={()=>props.restart()} />
        <h1>HOT or COLD</h1>
      </header>
    )
}


