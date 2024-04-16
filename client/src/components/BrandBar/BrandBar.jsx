import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import styles from './BrandBar.module.css'
import { Context } from '../../index';
import Card from 'react-bootstrap/Card'

export const BrandBar = observer(() => {
    const {item} = useContext(Context)
  return (
    <div className={styles.row}>
        {item.brands.map(brand =>
        <Card
        key={brand.id}
        style={{cursor: 'pointer'}}
        //className={styles.card}
        className='p-3'
        onClick={() => item.setSelectedBrand(brand)}
        border={brand.id === item.selectedBrand.id ? 'danger': 'light'}>
            {brand.name}
            </Card>
        )}
    </div>
  )
});
