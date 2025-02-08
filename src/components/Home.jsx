import React, { useState } from 'react'
import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa'
import styles from './Home.module.css'
import Navbar from './Navbar/Navbar'
import SkillsCaresoul from './SkillCaresoul/SkillsCaresoul'
import ashish from '../assets/ashish.png'
import Experience from './Experience/Experience'
import { MdEmail } from 'react-icons/md'
const Home = () => {
  const [showButtons, setShowButtons] = useState(false)
  return (
    <div className={styles.home}>
      <div className={styles.Intro}>
        <div className={styles.pannel1}>
          <h1>Hi, I'm </h1>
          <span id={styles.name}>Ashish Yadav.</span>
          <p id={styles.designation}>Full Stack Developer</p>
          <button id={styles.contact} onClick={()=>setShowButtons(!showButtons)}>Contact Me
            {showButtons && <div className={styles.contactButtons}>
              <a href="https://www.linkedin.com/in/ashish-yadav-7b1b3b1b1/" target="_blank" rel="noreferrer"><FaLinkedin size="3vmax"/></a>
              <a href="" tabIndex={0}><MdEmail size="3vmax" /></a>
              <a href="" tabIndex={0}><FaGithub size="3vmax"/></a>
              <a href="" tabIndex={0}><FaInstagram size="3vmax"/></a>
            </div>}
          </button>
        </div>
        <div className={styles.pannel2}>
          <img src={ashish} border="0" id={styles.myImage}></img>
        </div>

      </div>
      <div style={{ padding: "20px",margin:"2vh 0px" }}>
      <SkillsCaresoul/>
      </div>
      
      <div className={styles.professionalSummary}>
        <h2>Professional summary</h2>
        <p className={styles.summary}>A skilled Java Full Stack Developer with experience in Angular and Spring Boot, specializing in building scalable web applications. Proficient in the MERN stack, with expertise in developing RESTful APIs, database management, and front-end development. Possesses domain knowledge in banking and insurance, ensuring efficient and secure application development tailored to industry requirements. Passionate about creating robust and user-friendly solutions.</p>
      </div>
      <div className={styles.experience}>
      <h2>Experience</h2>
         <Experience/>
        </div>
   
    </div>
  )
}

export default Home