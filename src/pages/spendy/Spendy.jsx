import React from 'react'
import './spendy.css'
import spendycs from '../../assets/Spendy CS.png'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Spendy = () => {
  return (
    <div className='spendyMain'>
      <div className='csNavbar'><Navbar /></div>
      <div className='csImage'><img src={spendycs} alt="" /></div>
      <div className='navigationMain'>
        <div className='navClicks'>
          <Link to="/educard"><div className='prev'><p>Previous Project</p></div></Link>
          <Link to="/reporta"><div className='next'><p>Next Project</p></div> </Link>
        </div>
     </div>
    
    </div>
  )
}

export default Spendy
