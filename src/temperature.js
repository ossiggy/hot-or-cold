import React from 'react'

import './temperature.css'

export default function Temperature(props){
  return(
    <h1 className='temp'>{props.temp}</h1>
  )
}