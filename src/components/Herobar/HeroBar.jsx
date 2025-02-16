import React from 'react';
import './herobar.css';

const HeroBar = () => {
  return (
    
      <section className="hero-section ">
      <h1 className="hello">Hello, my name is</h1>
      <h1 className="display-3 fw-bold name" >Ankit Yadav</h1>
      <h2 className="fs-2  name">Frontend Developer</h2>
      {/* <h2 className="fs-2  name">I love developing next-generation products!</h2> */}
      <h1 className="fs-2  name">"Always learning, always coding, always improving!"
      </h1>
      <button className="cta-button">Hire me </button>
    </section>
  
  )
}

export default HeroBar
