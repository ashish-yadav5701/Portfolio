import React from 'react'
import styles from './Experience.module.css'
const Experience = () => {
    return (

        <div className={styles.experience}>
            <div>
                <div className={styles.heading}>
                    <div className={styles.jobTitle} >Software Engineer</div>
                    <div className={styles.company}>LTIMindtree</div>
                    <div className={styles.date}>March 2024 – Present</div>
                </div>
                <div className={styles.role}>
                    <ul >
                        <li>Engineered scalable Java microservices and RESTful APIs to streamline system integration in banking.</li>
                        <li>Developed full-stack solutions using Node.js and React to enhance internal team efficiency and productivity.</li>
                        <li>Designed and managed APIs for insurance workflows, ensuring security, performance optimization, and seamless data processing</li>
                    </ul>
                </div>

                
            </div>
            <div>
            <div className={styles.heading}>
                    <div className={styles.jobTitle} >Graduate Engineer Trainee</div>
                    <div className={styles.company}>LTIMindtree</div>
                    <div className={styles.date}>Dec 2023 – March 2024</div>
                </div>
                <div className={styles.role}>
                    <ul>
                        
                        <li>Completed a 3-month intensive training in Java Full Stack Development using Spring Boot and Angular.</li>
                        <li>Developed an Event Management System as a project, implementing key functionalities such as user authentication, event creation, and booking management.</li>
                        <li>Gained hands-on experience in Spring Boot {`(REST APIs, JPA, Hibernate)`}, Angular {`(components, services, routing)`}, MySQL database, and authentication mechanisms.</li>
                        <li>Worked with Git for version control, and followed Agile methodologies.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Experience