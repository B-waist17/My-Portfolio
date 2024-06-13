import React from 'react'
import './linx.css'
import linxcs from '../../assets/Linx CS.png'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Linx = () => {
  return (
    <div className='linxMain'>
      <div className='csNavbar'><Navbar /></div>
        <div className='csImage'><img src={linxcs} alt="" /></div>
        <div className='navClicks'>
          <Link to="/reporta"><div className='prev'><p>Previous Project</p></div></Link>
          <Link to="/educard"><div className='next'><p>Next Project</p></div> </Link>
        </div>
    </div>
  )
}

export default Linx
