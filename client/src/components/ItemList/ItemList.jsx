import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Context } from '../../index';
import styles from './ItemList.module.css'
import { ItemCard } from '../ItemCard/ItemCard';

export const ItemList = observer(() => {
    const {item} = useContext(Context)
  return (
    <div className={styles.row}>
        {item.items.map(item =>
        <ItemCard  key={item.id} item={item}/>
        )}
    </div>
  )
});
