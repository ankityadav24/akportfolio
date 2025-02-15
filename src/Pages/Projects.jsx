import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.jpg';
import todo from '../assets/todo.avif';
import youtube from '../assets/youtube.avif';

import '../style/Project.css';

const Projects = () => {
  const projectList = [
    {
      title: "Online Learning Management System",
      description: "A full-fledged e-learning platform that bridges the gap between students, teachers, and administrators. The system enables",
      technologies: ["React, Node.js, Redux, Bootstrap, MongoDB"],
      image: img1,
      demoLink: "https://almsiit.vercel.app/",
      sourceCode: "https://github.com/suryadeepyadav/ALMSIIT",
    },
    {
      title: "Youtube Clone",
      description: "A video-sharing platform that replicates YouTube’s core functionalities, including:",
      technologies: ["React","JavaScript,css",],
      image: youtube,
      demoLink: "https://akyyoutube.vercel.app/",
      sourceCode: "https://github.com/ankityadav24/YouTube-Clone",
    },
    {
      title: "TODO List",
      description: " TaskMaster is a sleek and user-friendly To-Do List application designed to help users efficiently manage their daily tasks.Add, edit, and delete tasks with ease",
      technologies: ["React,css,localstorage"],
      image: todo,
      demoLink: "https://todoaky.vercel.app/",
      sourceCode: "https://github.com/ankityadav24/TodoAky",
    },
    {
      title: "Daily Planner App",
      description: "A task management app that helps users organize their daily activities efficiently. Key features include ||Users can add tasks and update their status (Completed/Pending)",
      technologies: ["React Native,css"],
      image: img2,
      demoLink: "https://example.com/youtubeclone",
      sourceCode: "https://github.com/ankityadav24/dailyplannerapp",
    },
  ];

  return (
    <div className="container py-5" id="project">
      <h1 className="text-center mb-5 fw-bold  text-decoration-underline"> Projects</h1>
      <div className="row">
        {projectList.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="project-card shadow-lg animate__animated animate__fadeInUp">
              <div className="image-container">
                <img src={project.image} className="card-img-top project-image" alt={project.title} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text ">{project.description}</p>
                <p className="tech-used"><strong>Tech Stack:</strong> {project.technologies.join(", ")}</p>
                <div className="btn-container">
                  <a href={project.demoLink} className="btn live-demo" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
                  <a href={project.sourceCode} className="btn source-code" target="_blank" rel="noopener noreferrer">💻 Source Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
