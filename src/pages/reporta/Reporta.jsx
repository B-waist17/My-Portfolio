import React from 'react'
import './reporta.css'
import reportaCs from '../../assets/Reporta Casestudy.jpg'
import Navbar from '../../components/navbar/Navbar'

const Reporta = () => {
  return (
    <div className='reportaMain'>
        <div className='csNavbar'><Navbar /></div>
      <div className='csImage'><img src={reportaCs} alt="" /></div>
      <div className='navigationMain'>
        <div className='navClicks'>
          <a href=""><div className='prev'><p>Previous Project</p></div></a>
          <a href=""><div className='next'><p>Next Project</p></div></a>
        </div>
     </div>
      
    </div>
  )
}

export default Reporta
