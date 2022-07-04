import React from "react";
import styles from "../styles/LetsTalk.module.css";

const LetsTalk = () => {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.flextalk}>
          <div className={styles.talkleft}>
            <a href="#" className={styles.link}>
              <h4 className={styles.lt}>Let's talk.</h4>
              <span className={styles.email}>hi@rsq.com</span>
            </a>
          </div>

          <div className={styles.talkright}>
            <ul className={styles.socialicons}>
              <li className={styles.social}>
                <img src="./assets/img/instagram.svg" alt="instagram" />
              </li>
              <li className={styles.social}>
                <img src="./assets/img/twitter.svg" alt="instagram" />
              </li>
              <li className={styles.social}>
                <img src="./assets/img/linkedin.svg" alt="instagram" />
              </li>
            </ul>
            <ul className={styles.places}>
              <li className={styles.social}>Mobile, AL</li>
              <li className={styles.social}>Chicago, IL</li>
              <li className={styles.social}>Tulsa, OK</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.imgcontainer}>
        <a href="" className={styles.footerlink}>
          <div className={styles.footertext}>
            <h3 className={styles.projects}>All Projects</h3>
            <span className={styles.work}>Work ></span>
          </div>
          <img src="./assets/img/footer.jpg" alt="" className={styles.img} />
        </a>
      </div>
    </>
  );
};

export default LetsTalk;
