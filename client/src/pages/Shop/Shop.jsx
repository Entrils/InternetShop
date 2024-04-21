import React, { useContext, useEffect } from 'react'
import styles from './Shop.module.css'
import { TypeBar } from '../../components/TypeBar/TypeBar'
import { BrandBar } from '../../components/BrandBar/BrandBar'
import { ItemList } from '../../components/ItemList/ItemList'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { fetchTypes, fetchBrands, fetchItems } from '../../http/itemAPI'
import { Pages } from '../../components/Pages.jsx'

export const Shop = observer(() => {

  const {item} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=> item.setTypes(data))
    fetchBrands().then(data=> item.setBrands(data))
    fetchItems(null, null, 1, 5).then(data=> {
      item.setItems(data.rows)
      item.setTotalCount(data.count)
    })
  },[])

  useEffect(() => {
    fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, 10).then(data => {
        item.setItems(data.rows)
        item.setTotalCount(data.count)
    })
}, [item.page, item.selectedType, item.selectedBrand,])

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
      <BrandBar />
        <div className={styles.cards}>
            <ItemList />
        </div>
        <Pages />
      </div>

    </section>
  )
});