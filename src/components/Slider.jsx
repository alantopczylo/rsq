import React, { useEffect, useState } from "react";
import styles from "../styles/Slider.module.css";
import "../index.css";

const pictures = [
  "https://i.postimg.cc/vGgdDrH9/slide1.jpg",
  "https://i.postimg.cc/gdmd4LNF/slide2.jpg",
  "https://i.postimg.cc/TRnMJTb3/slide3.jpg",
  "https://i.postimg.cc/SkK4b0Bg/slide4.jpg",
  "https://i.postimg.cc/4XDRcYm0/slide5.jpg",
  "https://i.postimg.cc/54MJhXJz/slide6.jpg",
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
