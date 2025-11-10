import React from 'react'

export default function Services(){
  const services = [
    'Web Development (React, JS)',
    'Frontend & UI Design',
    'Machine Learning Prototyping',
    'Project collaboration & consulting'
  ]
  return (
    <div className="container">
      <h2>Services</h2>
      <div className="grid">
        {services.map((s,i)=> <div className="card" key={i}><h4>{s}</h4></div>)}
      </div>
    </div>
  )
}
