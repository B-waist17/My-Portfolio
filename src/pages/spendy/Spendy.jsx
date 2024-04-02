import React from 'react'
import './spendy.css'
import spendycs from '../../assets/Spendy CS.png'
import Navigation from '../../components/navigation/Navigation'

const Spendy = () => {
  return (
    <div className='spendyMain'>
      <div><img src={spendycs} alt="" /></div>
      <Navigation />
    </div>
  )
}

export default Spendy
