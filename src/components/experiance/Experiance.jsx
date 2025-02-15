import React from 'react';
import css from '../../assets/skills/css-3.png';
import github from '../../assets/skills/github.png';
import html from '../../assets/skills/html.png';
import js from '../../assets/skills/js-file.png';

import java from '../../assets/skills/java.png';
import mysql from '../../assets/skills/mysql.png';
import { default as native, default as react } from '../../assets/skills/react.png';
import styles from "./experience.module.css";



const experience = () => {
    const skills = [
    { title: "JavaScript", image: js },
    { title: "HTML", image: html },
    { title: "CSS", image: css },
    { title: "React", image: react },
    { title: "Java", image: java },
    { title: "Native", image: native },
    { title: "My sql", image: mysql },
    { title: "github", image: github },

  ];

  const history = [
    // {
    //   role: "Frontend Developer",
    //   company: "PHP Infosec",
    //   startDate: "May 2024",
    //   endDate: "July 2024",
    //   experience: [
    //     "Developed responsive and interactive UI components.",
    //     "Collaborated with the team to build modern web applications.",
    //   ],
    // },
    {
      role:"React Native Developer (Intern)",
      company: "BmCoder",
      startDate: "9 Sep 2024",
      endDate: "10 Dec 2024",
      experience: [
        "Worked on mobile app development using React Native.",
        "Gained hands-on experience in state management and UI optimization.",
      ],
    },
  ];

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillimagecontainer}>
                                    <img src={skill.image} />
                                </div>
                                <p>
                                    {skill.title}
                                </p>
                            </div>
                        )
                    }
                    )}
                </div>
                <ul className={styles.history}>
                    {history.map((his, id) => {
                        return (
                            <li key={id} className={styles.historyitem}>
                                <div className={styles.historyitemdetails}>
                                    <h3>{`${his.role},${his.company}`}</h3>
                                    <p>{`${his.startDate},${his.endDate}`}</p>
                                    <ul>
                                        {his.experience.map((exp, id) => {
                                            return <li key={id}>{exp}</li>
                                        })}
                                    </ul>
                                </div>

                            </li>
                        )
                    }
                    )}

                </ul>
            </div>

        </section >
    )
}

export default experience
