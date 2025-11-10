import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
  const [form, setForm] = useState({first:'', last:'', phone:'', email:'', message:''})
  const navigate = useNavigate()

  function handleChange(e){
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    // Capture to localStorage (simple mock of form capture)
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]')
    submissions.push({...form, date:new Date().toISOString()})
    localStorage.setItem('submissions', JSON.stringify(submissions))
    // Redirect to home
    navigate('/')
  }

  return (
    <div className="container">
      <h2>Contact Me</h2>
      <div className="card">
        <p>If you'd like to contact me directly: <strong>albaraa@example.com</strong></p>
        <form onSubmit={handleSubmit}>
          <label>First Name<input name="first" value={form.first} onChange={handleChange} required /></label>
          <label>Last Name<input name="last" value={form.last} onChange={handleChange} required /></label>
          <label>Contact Number<input name="phone" value={form.phone} onChange={handleChange} /></label>
          <label>Email Address<input name="email" value={form.email} onChange={handleChange} type="email" required /></label>
          <label>Message<textarea name="message" value={form.message} onChange={handleChange} rows="4" /></label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
