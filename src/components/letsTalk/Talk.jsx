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
          <div className='socialIcon'><img src={Linkedin} alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/ovakporanye-udi-eghere-a0a145143/')}/></div>
          <div className='socialIcon'><img src={Behance} alt="behance" onClick={() => window.open('https://www.behance.net/ranye92')}/></div>
          <div className='socialIcon'><img src={Github} alt="github" onClick={() => window.open('https://github.com/B-waist17')} /></div>
          <div className='socialIcon'><img src={Twitter} alt="twitter" onClick={() => window.open('https://x.com/b_waist17')}/></div>
          <div className='socialIcon'><img src={Instagram} alt="instagram" onClick={() => window.open('https://www.instagram.com/paulranye/')}/></div>
        </div>
      </div>
    </div>
  )
}

export default Talk
