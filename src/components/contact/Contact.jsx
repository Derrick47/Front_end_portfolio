import React from 'react'
import './contact.css'
import { BsWhatsapp } from 'react-icons/bs';
import {MdOutlineMailOutline} from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_db6igqr', 'template_mpyi0og', form.current, 'I0dhQxfeXkqlgRK5en')
   e.target.reset()
  };
  return (
    <section id='contact'>
     
      <h2>Contact Me</h2>
      <h5>Get In Touch</h5>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>derrickforcha360@gmail.com</h5>
            <a href='mailto:derrickforcha360@gmail.com'>Send a message </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>whatsapp</h4>
            <h5>+237654812052</h5>
            <a href='https://wa.me/+237672290863'>Send a message </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Name"required></input>
          <input type="email" name='email' placeholder="email"required></input>
          <textarea name='message' placeholder="Message" required></textarea>
          <button type="submit"className='btn btn primary'>send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact