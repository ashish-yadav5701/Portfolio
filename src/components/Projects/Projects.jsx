// import React, { useEffect } from 'react'
// import styles from './Projects.module.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// const Projects = () => {

//     useEffect(() => {
//         const images = ['eventease1.png', 'eventease2.png', 'eventease3.png'];
//         let currentIndex = 0;
//         const imageElement = document.getElementById('eventeaseImage');

//         const rotateImages = () => {
//             currentIndex = (currentIndex + 1) % images.length;
//             imageElement.src = images[currentIndex];
//         };

//         const intervalId = setInterval(rotateImages, 3000); // Change image every 3 seconds

//         return () => clearInterval(intervalId); // Cleanup interval on component unmount
//     }, []);
//     // useEffect(() => {
//     //     gsap.utils.toArray(`.${styles.project}`).forEach((project, index) => {
//     //         const direction = index % 2 === 0 ? '-100%' : '100%';
//     //         gsap.fromTo(
//     //             project.children,
//     //             { x: direction, opacity: 0 },
//     //             {
//     //                 x: '0%', opacity: 1, duration: 1, stagger: 0.3,
//     //                 scrollTrigger: {
//     //                     trigger: project,
//     //                     start: 'top 80%',
//     //                     toggleActions: 'play none none none'
//     //                 }
//     //             }
//     //         );
//     //     });
//     // }, []);

//     return (
//         <div className={styles.projectContainer}>
//             <div className={styles.project}>
//                 <div className={styles.leftContainer}>
//                 <img id="eventeaseImage" src='eventease1.png' alt="eventease" style={{background:'white'}} />
//                 </div>
//                 <div className={styles.rightContainer}>
//                     <h3>Eventease</h3>
//                     <ul>
//                         <li id={styles.techStack}>Tech Stack: Spring Boot, Spring Data JPA, Spring Security, Angular</li>

//                         <li>Developed a web application for managing events and tasks for event planners.</li>

//                         <li>Implemented user authentication and authorization using Spring Security.</li>

//                         <li>Enabled event planners to manage schedules and tasks.</li>

//                         <li>Provided admin functionalities for system control and oversight.</li>

//                     </ul>
//                 </div>
//             </div>
//             <div className={styles.project}>
//                 <div className={styles.leftContainer}>
//                     <img src='eventease3.png' alt="eventease"  style={{background:'white'}}/>
//                 </div>
//                 <div className={styles.rightContainer}>
//                     <h3>RSQC</h3>
//                     <ul>
//                         <li id={styles.techStack}>Tech Stack: Android (Java), Firebase</li>
//                         <li>Designed and developed an Android app for student registration in quiz competitions.</li>
//                         <li>Enabled students to register, log in, and submit their details.</li>
//                         <li>Implemented admin features to assign roll numbers in one click and verify payments.</li>
//                         <li>Developed notice posting functionality for student communication.</li>
//                         <li>Integrated PDF generation for exporting registered students’ details.</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className={styles.project}>
//                 <div className={styles.leftContainer}>
//                     <img src='projectFinal.png' alt="eventease" style={{background:'white'}} />
//                 </div>
//                 <div className={styles.rightContainer}>
//                     <h3>Face mask Detection</h3>
//                     <ul>
//                         <li id={styles.techStack}>Tech Stack: Python, TensorFlow/Keras, OpenCV</li>
//                         <li>Developed a ResNet-50-based CNN model for real-time face mask detection.</li>
//                         <li>Achieved 99.4% accuracy by implementing bilinear interpolation, bilinear filtering, and fuzzy c-means clustering for improved image preprocessing.</li>
//                         <li>Integrated OpenCV for real-time detection and efficient image processing.</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Projects



import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const images = ['eventease1.png', 'eventease2.png', 'eventease3.png'];
        let currentIndex = 0;
        const imageElement = document.getElementById('eventeaseImage');

        const rotateImages = () => {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = images[currentIndex];
        };

        const intervalId = setInterval(rotateImages, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        projectRefs.current.forEach((project, index) => {
            const direction = index % 2 === 0 ? '-100%' : '100%';
            gsap.fromTo(
                project.children,
                { x: direction, opacity: 0 },
                {
                    x: '0%', opacity: 1, duration: 1, stagger: 0.3,
                    scrollTrigger: {
                        trigger: project,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    return (
        <div className={styles.projectContainer}>
            <div className={styles.project} ref={el => projectRefs.current[0] = el}>
                <div className={styles.leftContainer}>
                    <img id="eventeaseImage" src='eventease1.png' alt="eventease" style={{ background: 'white' }} />
                </div>
                <div className={styles.rightContainer}>
                    <h3>Eventease</h3>
                    <ul>
                        <li id={styles.techStack}>Tech Stack: Spring Boot, Spring Data JPA, Spring Security, Angular</li>
                        <li>Developed a web application for managing events and tasks for event planners.</li>
                        <li>Implemented user authentication and authorization using Spring Security.</li>
                        <li>Enabled event planners to manage schedules and tasks.</li>
                        <li>Provided admin functionalities for system control and oversight.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.project} ref={el => projectRefs.current[1] = el}>
                <div className={styles.leftContainer}>
                    <img src='eventease3.png' alt="eventease" style={{ background: 'white' }} />
                </div>
                <div className={styles.rightContainer}>
                    <h3>RSQC</h3>
                    <ul>
                        <li id={styles.techStack}>Tech Stack: Android (Java), Firebase</li>
                        <li>Designed and developed an Android app for student registration in quiz competitions.</li>
                        <li>Enabled students to register, log in, and submit their details.</li>
                        <li>Implemented admin features to assign roll numbers in one click and verify payments.</li>
                        <li>Developed notice posting functionality for student communication.</li>
                        <li>Integrated PDF generation for exporting registered students’ details.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.project} ref={el => projectRefs.current[2] = el}>
                <div className={styles.leftContainer}>
                    <img src='projectFinal.png' alt="eventease" style={{ background: 'white' }} />
                </div>
                <div className={styles.rightContainer}>
                    <h3>Face mask Detection</h3>
                    <ul>
                        <li id={styles.techStack}>Tech Stack: Python, TensorFlow/Keras, OpenCV</li>
                        <li>Developed a ResNet-50-based CNN model for real-time face mask detection.</li>
                        <li>Achieved 99.4% accuracy by implementing bilinear interpolation, bilinear filtering, and fuzzy c-means clustering for improved image preprocessing.</li>
                        <li>Integrated OpenCV for real-time detection and efficient image processing.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;