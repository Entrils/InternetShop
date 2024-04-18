import React, { useContext, useEffect } from 'react'
import styles from './Shop.module.css'
import { TypeBar } from '../../components/TypeBar/TypeBar'
import { BrandBar } from '../../components/BrandBar/BrandBar'
import { ItemList } from '../../components/ItemList/ItemList'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { fetchTypes, fetchBrands, fetchItems } from '../../http/itemAPI'

export const Shop = observer(() => {

  const {item} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=> item.setTypes(data))
    fetchBrands().then(data=> item.setBrands(data))
    fetchItems().then(data=> item.setItems(data.rows))
  },[])

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
});