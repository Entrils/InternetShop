import React from 'react'
import styles from './Shop.module.css'
import { TypeBar } from '../../components/TypeBar/TypeBar'
import { BrandBar } from '../../components/BrandBar/BrandBar'
import { ItemList } from '../../components/ItemList/ItemList'

export const Shop = () => {
  return (
    <section className={styles.container}>
       { // боковая панель с типами
 }
      <div className={styles.typebar}>
          <TypeBar />
      </div>

 { // основной контент (карточки с товарами) 
 }
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.col}>
            <BrandBar />
            <ItemList />
          </div>
        </div>
      </div>

    </section>
  )
}