import React from 'react'

export default function About(){
  return (
    <div className="container">
      <div className="card" style={{display:'flex', gap:16, alignItems:'center'}}>
        <img src="/logo.svg" alt="Headshot placeholder" width="120" style={{borderRadius:12}}/>
        <div>
          <h2>Albaraa Albouaini (Baraa)</h2>
          <p>
            My name is Albaraa, but you can also call me Baraa. 
            I am currently studying Software Engineering – AI at Centennial College. 
            I have a strong interest in web development, artificial intelligence, and creating useful applications that make life easier. 
            Outside of school, I enjoy basketball, fitness, and focusing on my health. 
            I am an outgoing and social person who enjoys working in teams, meeting new people, and learning from different experiences. 
            My goal is to grow my skills, take on new challenges, and build a career where I can contribute to innovative projects.
          </p>
          <p><a href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume (PDF)</a></p>
        </div>
      </div>
    </div>
  )
}
