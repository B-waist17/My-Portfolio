import React from 'react'
import './educard.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import educardcs from '../../assets/Edu Card CS.png'

const EduCard = () => {
  return (
    <div className='educardMain'>
      <div className='csNavbar'><Navbar /></div>
        <div className='csImage'><img src={educardcs} alt="" /></div>
        <div className='navClicks'>
          <Link to="/"><div className='prev'><p>Previous Project</p></div></Link>
          <Link to="/spendy"><div className='next'><p>Next Project</p></div> </Link>
        </div>
    </div>
  )
}

export default EduCard
