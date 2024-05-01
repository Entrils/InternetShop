import React, { useContext, useEffect } from 'react'
import styles from './Blog.module.css';
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';
import {slides} from '../../data/ImageSlider.json';
import { observer } from 'mobx-react-lite';
import { fetchTypes, fetchBrands, fetchItems } from '../../http/itemAPI'
import { Context } from '../../index';
import { ItemCard } from '../../components/ItemCard/ItemCard';


export const Blog = observer(() => {

  const {item} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=> item.setTypes(data))
    fetchBrands().then(data=> item.setBrands(data))
    fetchItems(null, null, 1, 5).then(data=> {
      item.setItems(data.rows)
      item.setTotalCount(data.count)
    })
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <ImageSlider data={slides}/>
        </div>
      <div className={styles.buyersChose}>
        <p>Выбор покупателей</p>
      </div>
      <div className={styles.mostPopular}>
      {item.items.map(item =>
        <ItemCard  key={item.id} item={item}/>
        )}
      </div>
      <div className={styles.news}>
        <p>Новости</p>
      </div>
   </div>
  )
})
