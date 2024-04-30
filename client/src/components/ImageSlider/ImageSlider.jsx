import React, { useState } from 'react'
import styles from './IS.module.css'

export const ImageSlider = ({data}) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length-1 ? 0 : slide+1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length-1 : slide-1);
    }

  return (

    <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prevSlide}>prev</button>
        {data.map((item, index)=>{
            return <img src={item.src} alt={item.alt} key={index} className={slide === index ? styles.slide : styles.slideHdn}/>
        })}
    <button className={styles.arrowRight} onClick={nextSlide}>next</button>
    <span className={styles.indicators}>
        {data.map((_, index) =>{
           return ( 
            <button key={index} 
            onClick={() => setSlide(index)}
            className={ slide === index ? styles.indicatorBtn : styles.indicatorBtnInactive}></button>
        )
        })}
    </span>
    </div>
  )
}
