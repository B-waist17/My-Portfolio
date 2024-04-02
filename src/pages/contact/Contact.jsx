import React from 'react'
import './contact.css'
import Navbar from '../../components/navbar/Navbar'
import { RiMessage2Line, RiPhoneLine } from 'react-icons/ri'
import Talk from '../../components/letsTalk/Talk'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
       // console.log(name, email, number, subject, message)
       const serviceId = 'service_jrf9m0o'
       const templateId = 'template_zk55vfj'
       const publicKey = 'JFLJ58mI60tlyiGe6'

       const templateParams = {
        from_name: name,
        from_email: email,
        from_number: number,
        the_subject: subject,
        message: message,
        to_name: 'Ranye Udi',
       }

       emailjs.send(serviceId, templateId, templateParams, publicKey)
       .then((response) => {
        console.log('EMAIL SENT SUCCESSFULLY!', response.status, response.text)
        setName('')
        setEmail('')
        setNumber('')
        setSubject('')
        setMessage('')
       })
       .catch((err) => {
        console.log('EMAIL SENDING FAILED...', err)
       })
    }


  return (
    <div className='contactMain'>
      <div className='contactHeader'>
        <Navbar />
        <div className='headerText'><h1>Contact Me</h1></div>
      </div>
      <div className='contactBody'>
        <div className='contactForm'>
            <div className='formInfo'>
                <h2>Lets Work Together</h2>
                <p>I am interested in full-time, part-time and freelance <br /> opportunities.</p>
            </div>
            <form action="submit">
                <div className='inputs'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="number">Phone Number</label>
                    <input type="number" id='number' value={number} onChange={(e) => setNumber(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="message">Message</label>
                    <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
                </div>
                
                <button type='submit' onClick={handleSubmit} className='bt'>Submit</button>
            </form>
        </div>
        <div className='contactInfo'>
            <div className='infoCard'>
                <h2>Contact Info</h2>
                <div className='info'>
                    <RiMessage2Line color="fff" size={27}/>
                    <p>ranye92@gmail.com</p>
                </div>
                <div className='info'>
                    <RiPhoneLine color="fff" size={27}/>
                    <p>+2348074450802</p>
                </div>
            </div>
        </div>
      </div>
      <Talk />
    </div>
  )
}

export default Contact
