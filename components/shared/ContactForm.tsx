import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h1>Contact Form</h1>
        <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea placeholder='Message' />
            <button>Send</button>
        </form>
        <p>
            <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p>
            <a href="tel:+123456789">+123456789</a>
        </p>

    </div>
  )
}

export default ContactForm