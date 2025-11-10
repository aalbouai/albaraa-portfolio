import React from 'react'

const projects = [
  {id:1, title:'Project One', img:'/project1.jpg', desc:'A web app built with React. Role: Full-stack developer.'},
  {id:2, title:'Project Two', img:'/project2.jpg', desc:'An AI experiment. Role: Research & prototyping.'},
  {id:3, title:'Project Three', img:'/project3.jpg', desc:'Mobile-friendly site. Role: Frontend developer.'},
]

export default function Projects(){
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <div key={p.id} className="card">
            <div style={{height:120, background:'#eef', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img src={p.img} alt={p.title} style={{maxWidth:'100%', maxHeight:'100%'}}/>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
