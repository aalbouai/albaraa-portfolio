import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
  return (
    <header className="nav">
      <a href="/" className="logo" aria-label="logo">
        <img src="/logo.svg" width="48" height="48" alt="logo" />
        <div>
          <div style={{fontWeight:700}}>Albaraa (Baraa)</div>
          <div style={{fontSize:12, color:'#666'}}>Software Engineering - AI</div>
        </div>
      </a>
      <nav style={{marginLeft:'auto'}}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
