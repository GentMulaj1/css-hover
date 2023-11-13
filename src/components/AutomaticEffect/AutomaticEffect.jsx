import React from 'react'
import './AutomaticEffect.css'

const AutomaticEffect = ({ animationColor, buttonName }) => {

  return (
    <div className='AutomaticEffect'>
        <a href='/' style={{ "--clr": animationColor }}>
            <span>{buttonName}</span>
        </a>
    </div>
  )
}

export default AutomaticEffect