import React from 'react'
import styles from "./Navigation.module.css";
const Navigation = () => {

  console.log(styles);
  return (
    <nav className={`${styles.Navigation} container`}>
      <div >
        <img src="/images/flipkart.jpg" alt="logo1" className="logo"/>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
      </ul>
    </nav>
  )
}

export default Navigation