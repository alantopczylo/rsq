import React from "react";
import styles from "../styles/SelectClients.module.css";

const SelectClients = () => {
  return (
    <div className={styles.container}>
      <section className={styles.selectFlex}>
        <div className={styles.select}>
          <h3 className={styles.paragraph}>Select Clients</h3>
        </div>

        <div className={styles.listleft}>
          <li className={styles.item}>Cherokee Casinos</li>
          <li className={styles.item}>Flipboard</li>
          <li className={styles.item}>Foxwoods</li>
          <li className={styles.item}>Glanbia Nutritionals</li>
          <li className={styles.item}>Google</li>
          <li className={styles.item}>Hard Rock</li>
          <li className={styles.item}>Hibbett Sports</li>
          <li className={styles.item}>Hilton Worldwide</li>
          <li className={styles.item}>Jack Daniel's</li>
        </div>

        <div className={styles.listright}>
          <li className={styles.item}>Nescafé</li>
          <li className={styles.item}>New York Pride</li>
          <li className={styles.item}>Patreon</li>
          <li className={styles.item}>Rivers Casino</li>
          <li className={styles.item}>Snickers</li>
          <li className={styles.item}>Southern Comfort</li>
          <li className={styles.item}>The University of Alabama</li>
          <li className={styles.item}>Twix</li>
          <li className={styles.item}>Wind Creek Hospitality</li>
        </div>

        <div className={styles.divider}>
          <div className={styles.line}></div>
        </div>
      </section>
    </div>
  );
};

export default SelectClients;
