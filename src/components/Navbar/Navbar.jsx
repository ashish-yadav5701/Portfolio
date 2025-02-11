import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="logo.png" alt="nav logo" />
        </div>
        <div className={styles.navContent}>
            <h4>Home</h4>
            <h4>Projects</h4>
            <h4>Contact</h4>
        </div>
        
        <div className={styles.hamburger}>
          {!open ?<IoMenu size="100%" onClick={() => setOpen(!open)}/>:<IoClose size="100%" onClick={() => setOpen(!open)}/>}
         {open && ( <div className={styles.hamburgerContent}>
            <h4>Home</h4>
            <h4>Projects</h4>
            <h4>Contact</h4>
          </div>
         )}

        </div>
    </div>
  )
}

export default Navbar