import React from 'react'
import './BackgroundEffect.css'
import styled from 'styled-components';

const bg = styled.div`

`

const BackgroundEffect = ({ text, fullname, firstColor, secondColor}) => {
  return (
    <div className='BackgroundEffect'>
        <div className="card">
            <div className="box">
                <p>
                    {text}
                </p>
                <h2>{fullname}</h2>
            </div>
            <div className='bg' style={{'--firstColor': firstColor, "--secondColor": (secondColor ? secondColor : "#00eeff") }}></div>
        </div>
    </div>
  )
}

export default BackgroundEffect