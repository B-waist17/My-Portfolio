import React from 'react'
import './work.css'
import WorkImg from '../../assets/WORK.png'

const Work = () => {
  return (
    <div className='workMain' >
      <div className='workContent'>
        <img src={WorkImg} alt="work" />
      </div>
    </div>
  )
}

export default Work
