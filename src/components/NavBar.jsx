import React from "react";
import styles from "../styles/NavBar.module.css";
import "../index.css"

const NavBar = () => {
  return (
    <div className={styles.container} role="navigation">
      <div className={styles.squareContainer}>
        <a href="#">
          <span className={styles.square}></span>
        </a>

        <a className="right" href="#">
          <p className="link">Work</p>
          <img
            src="./assets/img/right-arrow.svg"
            alt=""
            className="arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
