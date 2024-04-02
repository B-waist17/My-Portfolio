import React from 'react'
import './header.css'
import LogoR from '../../assets/My logo R.png'
import LogoOutline from '../../assets/My logo (outline).png'
const Header = () => {
  return (
    <div className='headerMain'>
      <div className='headerContent'>
        <div className='headerContentLeft'>
            <p>Hi,</p>
            <div>
                <p>I'm  <span><img src={LogoR} alt="logo R" /></span>anye <br /></p>
            </div>
            <p className='role'>PRODUCT DESIGNER</p>
            <p className='roleDes'>UI/UX Design | UI Development</p>
            <div className='headerButtons'>
                <button>Contact Me</button>
                <button className='bt2'>Resume</button>
            </div>
        </div>
        <div className='headerContentRight'>
            <img src={LogoOutline} alt="logo outline" />  
        </div>
      </div>
    </div>
  )
}

export default Header
