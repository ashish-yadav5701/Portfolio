import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}></div>
        <div className={styles.navContent}>
            <h4>Home</h4>
            <h4>Projects</h4>
            <h4>Contact</h4>
        </div>
    </div>
  )
}

export default Navbar