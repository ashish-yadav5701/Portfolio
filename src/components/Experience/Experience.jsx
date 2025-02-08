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
                    <h3>Banking Project {`(July 2024 - Present)`}</h3>
                    <ul >
                        <li>Developed and maintained Java-based microservices, ensuring high performance and scalability.</li>
                        <li>Built and managed RESTful APIs for seamless integration with internal and external systems.</li>
                        <li>Implemented full-stack solutions for internal teams using Node.js backend and React frontend to enhance teams efficiency and developer productivity.</li>
                    </ul>
                </div>

                <div className={styles.role}>
                    <h3>Insurance Project {`(March 2024 - June 2024)`}</h3>
                    <ul>
                        <li>Designed and developed APIs to streamline insurance workflows and data processing.</li>
                        <li>Managed API lifecycle, including versioning, security, and performance optimization.</li>
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