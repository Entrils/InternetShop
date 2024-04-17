import React from 'react';
import styles from './ItemPage.module.css'
import ItemPageStar from '../../../assets/ItemPageStar.png'

export const ItemPage = () => {
  const item = {id: 1, name: 'Чупапи про', price: 1000, rating: 5, img: 'https://img.freepik.com/free-photo/colorful-candies-jelly-and-marmalade-unhealthy-sweets_114579-13261.jpg?w=1060&t=st=1713218306~exp=1713218906~hmac=7ee6be877c5865923412bbd3eb30996fbaa212c251c7729e3960e8d3636212b7'}
  const description = [
    {id: 1, title: 'Вкус', description: 'ВКУСНА'},
    {id: 2, title: 'Состав', description: 'всякая хрень и еще хренотень свреху и сахар'},
    {id: 3, title: 'Сладость', description: 'жопа слипнется'},
    {id: 4, title: 'Кислость', description: 'кислятина'},
    {id: 5, title: 'Энергетическая ценность', description: '5000ККал'},
  ]
  return (
    <section className={styles.content}>
      <div className={styles.UpperInfo}>
        <div className={styles.ImageContainer}>
        <img src={item.img} />
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
            {description.map((info,index) =>
              <div className={styles.InfoRow} key={info.id} style={{background: index % 2 === 0 ? '#17cf97' : 'lightgray'}}>
                {info.title}: {info.description}
              </div>
            )}
        </div>
    </section>
  )
}