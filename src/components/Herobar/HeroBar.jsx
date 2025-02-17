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
      <button className="cta-button"
        onClick={() => window.location.href = 'mailto:ankityadav6548798@gmail.com?subject=Job%20Opportunity&body=Hello%20Ankit,%20I%20would%20like%20to%20discuss%20a%20job%20opportunity.'}
>Hire me </button>
    </section>
  
  )
}

export default HeroBar
