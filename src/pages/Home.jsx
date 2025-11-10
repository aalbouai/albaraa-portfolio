import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="hero">
      <h1>Welcome — I'm Albaraa (Baraa)</h1>
      <p>I am a Software Engineering - AI student at Centennial College. I like basketball, fitness, and building web apps.</p>
      <p><strong>Mission:</strong> To learn, build, and ship high-quality applications that help people.</p>
      <div style={{marginTop:12}}>
        <Link to="/about"><button>About Me</button></Link>
        <Link to="/projects" style={{marginLeft:8}}><button>My Projects</button></Link>
      </div>
    </section>
  )
}
