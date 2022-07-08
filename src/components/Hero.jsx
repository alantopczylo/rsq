import React from "react";
import styles from "../styles/Hero.module.css";
import "animate.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        <div>
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            The{" "}
          </span>
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            agency{" "}
          </span>
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            for
          </span>
        </div>

        <div>
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            what{" "}
          </span>
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            comes{" "}
          </span>
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            next.
          </span>
        </div>
      </h1>
    </div>
  );
};

export default Hero;
