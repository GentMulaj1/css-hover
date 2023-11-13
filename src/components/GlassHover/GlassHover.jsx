import React from 'react'
import './GlassHover.css'

const GlassHover = ({ image, title, description }) => {
  return (
    <div className='GlassHover'>
        <img src={image} alt="" />
        <div className="content">
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default GlassHover