import React from "react";
import styles from "../styles/LetsTalk.module.css";
import instagram from "../assets/img/instagram.svg"
import twitter from "../assets/img/twitter.svg"
import linkedin from "../assets/img/linkedin.svg"


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
                <img src={instagram} alt="instagram" />
              </li>
              <li className={styles.social}>
                <img src={twitter} alt="twitter" />
              </li>
              <li className={styles.social}>
                <img src={linkedin} alt="linkedin" />
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
          <img src="https://i.postimg.cc/ds3JwzXR/footer.jpg" alt="" className={styles.img} />
        </a>
      </div>
    </>
  );
};

export default LetsTalk;
