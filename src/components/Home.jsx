import React from 'react'
import styles from './Home.module.css'
import Navbar from './Navbar/Navbar'
import SkillsCaresoul from './SkillCaresoul/SkillsCaresoul'
import ashish from '../assets/ashish.png'
const Home = () => {
  return (
    <div className={styles.home}>
    <div className={styles.Intro}>
      <div className={styles.pannel1}>
      <h1>Hi, I'm </h1>
      <span id={styles.name}>Ashish Yadav</span>
      <p id={styles.designation}>Full Stack Developer</p>
      <button id={styles.contact}>Contact Me</button>
      </div>
      <div className={styles.pannel2}>
        <img src={ashish}border="0" id={styles.myImage}></img>
      </div>
      
    </div>
    <SkillsCaresoul/>
    <div className={styles.professionalSummary}>
      <h2>Professional summary</h2>
      <p>A skilled Java Full Stack Developer with experience in Angular and Spring Boot, specializing in building scalable web applications. Proficient in the MERN stack, with expertise in developing RESTful APIs, database management, and front-end development. Possesses domain knowledge in banking and insurance, ensuring efficient and secure application development tailored to industry requirements. Passionate about creating robust and user-friendly solutions.</p>
    </div>
    </div>
  )
}

export default Home