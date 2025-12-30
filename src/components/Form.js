'use client'

import { useState } from 'react'
import TriangleSvg from '@/svg/TriangleSvg'

const Form = () => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz74VwZZ_fgKqJiqdSYA5OLjeqMkCIt1uzokGs0FPTHvf-dwcO8k8UBy861H59i9h_YfA/exec'

  const [status, setStatus] = useState('')  // '', 'sending', 'success', 'error'
  const [formData, setFormData] = useState({ Name: '', Email: '', Phone: '', Message: ''})

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    const formDataBody = new FormData()
    formDataBody.append('Name', formData.Name)
    formDataBody.append('Phone', formData.Phone)
    formDataBody.append('Email', formData.Email)
    formDataBody.append('Message', formData.Message)
    try {
      await fetch(SCRIPT_URL, { method: 'POST', body: formDataBody, mode: 'no-cors' })
      setStatus('success')
      setFormData({ Name: '', Phone: '', Email: '' , Message: ''})
    } catch (error) {
      console.error(error.message)
      setStatus('error')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-field">
          <label htmlFor="contact-form-name">Name</label>
          <input
            id="contact-form-name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            disabled={status === "sending"}
            placeholder="Enter your name"
            type="text"
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-form-phone">Phone Number</label>
          <input
            id="contact-form-phone"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            disabled={status === "sending"}
            placeholder="Enter your phone number"
            type="tel"
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-form-email">Email</label>
          <input
            id="contact-form-email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            disabled={status === "sending"}
            placeholder="Enter your email"
            type="email"
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-form-message">Message</label>
          <div className="contact-form-message-container">
            <textarea
              id="contact-form-message"
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              disabled={status === "sending"}
              placeholder="Enter your message"
              type="text"
              required
            />
          </div>
        </div>
        <button className="contact-form-button" type="submit" disabled={status === "sending"}>
          {status === 'sending' ? (
            <>
              <span>Sending…</span>
              <div className="contact-form-button-loader"></div>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <TriangleSvg angle={270} color="white"/>
            </>
          )}
        </button>
      </form>
      {status === 'success' ? (
        <p className="contact-response">
          Thank you for contacting <strong>The Insurance Practice</strong>.<br />
          We will get back to you shortly.
        </p>
      ) : status === 'error' ? (
        <p className="contact-response error-message">
          An unexpected error occurred.<br />
          Your message was not sent.
        </p>
      ) : (
        <p className="contact-response"></p>
      )}
    </>
  )
}

export default Form