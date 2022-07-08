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
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Cherokee Casinos
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Flipboard
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Foxwoods
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Glanbia Nutritionals
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Google
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Hard Rock
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Hibbett Sports
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Hilton Worldwide
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Jack Daniel's
          </li>
        </div>

        <div className={styles.listright}>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Nescafé
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            New York Pride
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Patreon
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Rivers Casino
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Snickers
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Southern Comfort
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            The University of Alabama
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Twix
          </li>
          <li
            className={styles.item}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Wind Creek Hospitality
          </li>
        </div>

        <div className={styles.divider}>
          <div className={styles.line}></div>
        </div>
      </section>
    </div>
  );
};

export default SelectClients;
