import React from "react";
import styles from "../styles/NavBar.module.css";
import arrow from "../assets/img/right-arrow.svg";
import "../index.css";

const NavBar = () => {
  return (
    <div className={styles.container} role="navigation">
      <div className={styles.squareContainer}>
        <a
          href="#"
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <span className={styles.square}></span>
        </a>

        <a
          className="right"
          href="#"
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <p className="link">Work</p>
          <img src={arrow} alt="" className="arrow" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
