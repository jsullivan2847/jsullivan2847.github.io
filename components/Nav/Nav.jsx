import React from 'react'
import styles from '/styles/Layout/Nav/Nav.module.css'



export default function Nav() {
  return (
    <nav className={styles.nav}>
        <a href="/About"><h3>About</h3></a>
        <a href=""><h3>Skills</h3></a>
        <a href=""><h3>Projects</h3></a>
        <a href=""><h3>Experience</h3></a>
    </nav>
  )
}
