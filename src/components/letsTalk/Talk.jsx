import React from 'react'
import TalkImg from '../../assets/Let’s Talk.png'
import './talk.css'
import Linkedin from '../../assets/akar-icons_linkedin-fill.svg'
import Behance from '../../assets/entypo-social_behance.svg'
import Github from '../../assets/mdi_github.svg'
import Twitter from '../../assets/eva_twitter-outline.svg'
import Instagram from '../../assets/cib_instagram.svg'



const Talk = () => {
  return (
    <div className='talkMain'>
      <div className='talkContent'>
        <div className='talkImage'><img src={TalkImg} alt="Let's talk" /></div>
        <div className='socials'>
          <div className='socialIcon'><img src={Linkedin} alt="linkedin" /></div>
          <div className='socialIcon'><img src={Behance} alt="behance" /></div>
          <div className='socialIcon'><img src={Github} alt="github" /></div>
          <div className='socialIcon'><img src={Twitter} alt="twitter" /></div>
          <div className='socialIcon'><img src={Instagram} alt="instagram" /></div>
        </div>
      </div>
    </div>
  )
}

export default Talk
