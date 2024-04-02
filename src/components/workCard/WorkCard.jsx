import React from 'react'
import './workCard.css'

const WorkCard = ( props ) => {
  return (
    <div className='cardMain'>
      <div className='cardImage'>
        <img src={props.photo} alt="" />
      </div>
      <div className='cardInfo'>
        <div className='cardText'>
          <p className='cardTitle'> {props.title}</p>
          <p className='cardDes'> {props.description}</p>
        </div>
        <div className='numba'><h1>{props.number}</h1></div>
      </div>
    </div>
  )
}

export default WorkCard
