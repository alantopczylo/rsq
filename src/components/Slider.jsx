import React, { useEffect, useState } from "react";
import styles from "../styles/Slider.module.css";
import "../index.css";

const pictures = [
  "assets/img/slide1.jpg",
  "assets/img/slide2.jpeg",
  "assets/img/slide3.jpeg",
  "assets/img/slide4.jpeg",
  "assets/img/slide5.jpeg",
  "assets/img/slide6.jpeg",
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
