import React from 'react'
import {Col} from 'react-bootstrap'
import styles from './ItemCard.module.css'
import star from '../../../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { ITEM_ROUTE } from '../../utils/consts'

export const ItemCard = ({item}) => {

  const navigate = useNavigate()

  return (
    <Col md={3} onClick={() => navigate(ITEM_ROUTE + "/" + item.id)}>
        <div className={styles.card}>
          <img src={import.meta.env.VITE_API_URL+item.img}/>
          <div className={styles.content}>
            <div className={styles.typeDuplicate}>Marmelad...</div>
            <div>
                <div className={styles.rating}>{item.rating}
                <img src={star}/>
                </div>
            </div>
          </div>
          <div>{item.name}</div>
        </div>
    </Col>
  )
}
