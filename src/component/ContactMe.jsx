import React from 'react'
import '../css/ContactMe.css'
import github from '../assets/Icon/github.png'
import linkedin from '../assets/Icon/linkedin.png'
import email from '../assets/Icon/email.png'

const ContactMe = () => {
  return (
    <div className='contact-background'>
        <h1 className='contact-title'>ContactMe</h1>
        <div className="icon-section-contact">
            <img className='icon' src={github} alt="" srcset="" />
            <img className='icon' src={linkedin} alt="" srcset="" />
            <img className='icon' src={email} alt="" srcset="" />
        </div>
        <p className='credit'>Made with heart and React</p>
    </div>
  )
}

export default ContactMe