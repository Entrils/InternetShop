import React from 'react'
import styles from './Blog.module.css';
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';
import {slides} from '../../data/ImageSlider.json';


export const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <ImageSlider data={slides}/>
        </div>
      </div>
  )
}
