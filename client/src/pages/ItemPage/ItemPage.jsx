import React, { useEffect, useState } from 'react';
import styles from './ItemPage.module.css'
import ItemPageStar from '../../../assets/ItemPageStar.png'
import { useParams } from 'react-router-dom';
import { fetchOneItem } from '../../http/itemAPI';

export const ItemPage = () => {
 const [item,setItem] = useState({info: []})
 const {id} = useParams();
 useEffect(() => {
  fetchOneItem(id).then(data => setItem(data))
 },[])
  return (
    <section className={styles.content}>
      <div className={styles.UpperInfo}>
        <div className={styles.ImageContainer}>
        <img src={import.meta.env.VITE_API_URL+item.img} />
        </div>
        <div className={styles.rating}>
           
            <h2>{item.name}</h2>
            <div 
            className={styles.ratingStar}
            style={{background: `url(${ItemPageStar}) no-repeat center center`, backgroundSize: 'cover'}}
            >
            {item.rating}
              </div>
        </div>

        <div className={styles.addBasketCard}>
            <h3>От: {item.price} рублей</h3>

            <button>Добавить в корзину</button>
        </div>

      </div>
        <div className={styles.consistens}>
          <h1>Свойства:</h1>
            {item.info.map((info,index) =>
              <div className={styles.InfoRow} key={info.id} style={{background: index % 2 === 0 ? '#17cf97' : 'lightgray'}}>
                {info.title}: {info.description}
              </div>
            )}
        </div>
    </section>
  )
}