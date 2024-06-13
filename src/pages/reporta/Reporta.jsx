import React from 'react'
import './reporta.css'
import reportaCs from '../../assets/Reporta Casestudy.jpg'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Reporta = () => {
  return (
    <div className='reportaMain'>
        <div className='csNavbar'><Navbar /></div>
      <div className='csImage'><img src={reportaCs} alt="" /></div>
      <div className='navigationMain'>
        <div className='navClicks'>
          <Link to="/spendy"><div className='prev'><p>Previous Project</p></div></Link>
          <Link to="/linx"><div className='next'><p>Next Project</p></div> </Link>  
        </div>
     </div>
      
    </div>
  )
}

export default Reporta
