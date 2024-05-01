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
        <button className={styles.arrowLeft} onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
</svg>
       </button>
        {data.map((item, index)=>{
            return <img src={item.src} alt={item.alt} key={index} className={slide === index ? styles.slide : styles.slideHdn}/>
        })}
    <button className={styles.arrowRight} onClick={nextSlide}>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
    </svg>
    </button>
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
