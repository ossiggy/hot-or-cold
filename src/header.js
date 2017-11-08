import React from 'react'

import TopNav from './top-nav'

export default function Header(props){
    return (
      <header className="header">
        <h1>HOT or COLD</h1>
          <TopNav restart={()=>props.restart()} />
      </header>
    )
}


