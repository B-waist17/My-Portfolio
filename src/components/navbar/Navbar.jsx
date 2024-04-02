import React from 'react'
import './navbar.css'
import logo from '../../assets/My Logo 1.png'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useState } from 'react'

const Menu = () => (
  <>
  <p><a href="about">About</a></p>
  <p><a href="/">Case Studies</a></p>
  <p><a href="contact">Contact</a></p>
  </>
)
  

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navMain'>
      <div className='navContent'>
        <a href="/"><img src={logo} alt="" /></a>
        <div className='navContentLinks'>
          <Menu />
        </div>
        <div className='navMenu'>
          {
            toggleMenu 
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) } />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {
            toggleMenu && (
              <div className='navMenuContainer scale-up-center'>
                <div className='navMenuContainerLinks'>
                  < Menu />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
