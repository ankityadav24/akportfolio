import React from 'react';
import '../style/About.css';

export const About = () => {
  return (
    
      <section  className="container  py-3" id="about ">
      <div className="about-content d-flex align-items-center flex-column flex-md-row">
        <div className="about-text text-md-start text-center me-md-4">
          <h1 className="about-title">About Me</h1>
          <p className="lead">
             I am <strong>Ankit Yadav</strong>.  
            I am passionate about front-end development and continuously exploring new technologies.
          </p>
          <p>
            I completed my **Master of Computer Applications (MCA) in 2024** and **Bachelor of Computer Applications (BCA) in 2022**.  
            During my journey, I completed an internship in **React Native** and also contributed as a **Front-End Developer** to my friend's company.  
          </p>
          <p>
            My goal is to become a skilled **Front-End Developer**, crafting engaging and user-friendly web experiences.
          </p>
        </div>
        <div className="about-image text-center">
          <img src="/image/ankit.jpg" alt="Profile" className="profile-pic mt-3 mt-md-0" />
        </div>
      </div>
     </section>
  );
};
