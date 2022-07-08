import React, { useEffect } from "react";
import styles from "../styles/Idea.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Idea = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.small}>
          <h2
            className={styles.title}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            We deal in ideas, design and media that are category defying. When
            the world Millis, you've got to Vanilli.
          </h2>

          <p
            className={styles.paragraph}
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Red Square believes in rigorous development of brand strategy and
            whip-smart execution. We make all sorts of things. Things that move
            markets, compel audiences and sell product. We help great brands
            create what comes next
          </p>
        </div>
        <div className={styles.divider}>
          <div className={styles.line}></div>
        </div>
      </div>
    </>
  );
};

export default Idea;
