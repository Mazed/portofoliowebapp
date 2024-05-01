import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

function ContactMe() {
  return (
    <section  id="contact" className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{ flex: 1 }}>
                <ContactInfoCard
                iconUrl="./assets/images/email-icon.svg"
                text="raiyoz@live.com"
                />
                <ContactInfoCard
                iconUrl="./assets/images/github-icon.svg"
                text="https://github.com/mazed"
                />
            </div>
            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe