import React, { useEffect, useState } from "react";
import styles from "../styles/Slider.module.css";
import "../index.css";

const pictures = [
  "https://rsq.vercel.app/assets/img/slide1.jpg",
  "https://rsq.vercel.app/assets/img/slide2.jpeg",
  "https://rsq.vercel.app/assets/img/slide3.jpg",
  "https://rsq.vercel.app/assets/img/slide4.jpg",
  "https://rsq.vercel.app/assets/img/slide5.jpg",
  "https://rsq.vercel.app/assets/img/slide6.jpg",
];

let count = 0;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleOnNext();
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // const startSlider = () => {
  //   setInterval(() => {
  //     handleOnNext()
  //   }, 300);
  // };

  const handleOnNext = () => {
    count = (count + 1) % pictures.length;
    setCurrentIndex(count);
  };

  // const handleOnPrev = () => {
  //   const picturesLength = pictures.length;

  //   count = (currentIndex + picturesLength - 1) % picturesLength;
  //   setCurrentIndex(count);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.sliderBox}>
        <img src={pictures[currentIndex]} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default Slider;
