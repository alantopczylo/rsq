import React, { useRef, useEffect } from "react";
import styles from "../styles/SliderShow.module.css";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpeg";
import slide3 from "../assets/img/slide3.jpg";
import slide4 from "../assets/img/slide4.jpg";
import slide5 from "../assets/img/slide5.jpg";
import slide6 from "../assets/img/slide6.jpg";

const SliderShow = () => {
  const slideshow = useRef(null);
  const intervaloSlideShow = useRef(null);

  const next = () => {
    //comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      //obtenemos el primer elemento del slideshow
      const firstElement = slideshow.current.children[0];

      //establecemos la transicion para el slideshow
      slideshow.current.style.transition = `1ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;

      //movemos el slideshow
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        //reiniciamos la posicion del slideshow
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        //tomamos el primer elemento y lo mandamos al final
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      //eventlistener para cuando termina la animacion
      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  // const previous = () => {
  //   if (slideshow.current.children.length > 0) {
  //     //obtenemos el primer elemento del slideshow
  //     const index = slideshow.current.children.length - 1;
  //     const lastElement = slideshow.current.children[index];

  //     slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

  //     slideshow.current.style.transition = "none";

  //     const slideSize = slideshow.current.children[0].offsetWidth;

  //     slideshow.current.style.transform = `translateX(-${slideSize}px)`;

  //     setTimeout(() => {
  //       slideshow.current.style.transition = "1ms ease-out all";
  //       slideshow.current.style.transform = `translateX(0)`;
  //     }, 30);
  //   }
  // };

  useEffect(() => {
    intervaloSlideShow.current = setInterval(() => {
      next();
    }, 300);

    // //eliminamos los intervalos
    // slideshow.current.addEventListener("mouseenter", () => {
    //   clearInterval(intervaloSlideShow.current);
    // });

    // //volvemos a poner el intervalo cuando saquen el cursor del slideshow
    // slideshow.current.addEventListener("mouseleave", () => {
    //   intervaloSlideShow.current = setInterval(() => {
    //     next();
    //   }, 300);
    // });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer} ref={slideshow}>
        <div className={styles.sliderBox}>
          <img src={slide1} alt="slide1" className={styles.img} />
        </div>

        <div className={styles.sliderBox}>
          <img src={slide2} alt="slide1" className={styles.img} />
        </div>

        <div className={styles.sliderBox}>
          <img src={slide3} alt="slide1" className={styles.img} />
        </div>

        <div className={styles.sliderBox}>
          <img src={slide4} alt="slide1" className={styles.img} />
        </div>

        <div className={styles.sliderBox}>
          <img src={slide5} alt="slide1" className={styles.img} />
        </div>

        <div className={styles.sliderBox}>
          <img src={slide6} alt="slide1" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default SliderShow;
