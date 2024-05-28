import React from 'react'
import './navbar.css'
import logo from '../../assets/My Logo 1.png'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <>
  <p><Link to="/about">About</Link></p>
  <p><Link to="/#work">Case Studies</Link></p>
  <p><Link to="/contact">Contact</Link></p>
  </>
)
  

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navMain'>
      <div className='navContent'>
        <Link to="/"><img src={logo} alt="" /></Link>
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
