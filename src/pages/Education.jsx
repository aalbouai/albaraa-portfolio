import React from 'react'

export default function Education(){
  const edu = [
    {school:'Centennial College', degree:'Diploma - Software Engineering (AI)', start:'2024', end:'Present'},
    {school:'High School Name', degree:'High School Diploma', start:'2019', end:'2023'}
  ]

  return (
    <div className="container">
      <h2>Education & Qualifications</h2>
      <div className="grid">
        {edu.map((e,i)=> (
          <div className="card" key={i}>
            <h3>{e.school}</h3>
            <p>{e.degree}</p>
            <p><strong>{e.start} — {e.end}</strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}
