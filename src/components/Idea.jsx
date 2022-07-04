import React from "react";
import styles from "../styles/Idea.module.css";

const Idea = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.small}>
          <h2 className={styles.title}>
            We deal in ideas, design and media that are category defying. When
            the world Millis, you've got to Vanilli.
          </h2>

          <p className={styles.paragraph}>
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
