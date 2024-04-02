import React from 'react'
import './about.css' 
import Navbar from '../../components/navbar/Navbar'
import Talk from '../../components/letsTalk/Talk'

const About = () => {
  return (
    <div className='aboutMain'>
      <div className='aboutHeader'>
        <Navbar />
        <div className='headerText'><h1>About Me</h1></div>
      </div>
      <div className='aboutBody'>
        <div className='bodyText'>
            <h1>Ovakporanye Udi-Eghere</h1><br />
            <p>
                Welcome to my world of design! I'm a passionate Product Designer based in Lagos, Nigeria, 
                dedicated to crafting remarkable digital experiences for users. I find immense joy in 
                exploring how design shapes our interactions with spaces and products.
            </p>
            <p>
                Throughout my professional journey, I've delved into immersive coursework that has cultivated 
                my expertise in various aspects of design. I've gained extensive experience in crafting compelling 
                user stories, developing impactful personas, creating insightful journey maps, structuring effective 
                information architecture, perfecting typography choices, and honing my wireframing skills. These practical 
                experiences have shaped me into a well-rounded Product Designer, ready to bring my wealth of knowledge to every 
                project I undertake.
            </p>
            <p>
                Beyond design, I'm an adventurer at heart—a lover of God, food, music, art, and travel. Life's journeys and experiences 
                inspire me to bring creativity and uniqueness to every project I embark on.
            </p>
            <p>
                Curious to know more about me, my projects, or simply want to connect? Reach out via email, and let's embark on an exciting design 
                journey together. I can't wait to hear from you!
            </p>
        </div> <br />
        <div className='bodyButtons'>
                <button>Contact Me</button>
                <button className='bt2'>Resume</button>
        </div>
      </div>
      <Talk />
    </div>
  )
}

export default About
