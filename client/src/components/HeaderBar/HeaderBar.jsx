import React from 'react'
import styles from './HeaderBar.module.css'
import {NavLink} from "react-router-dom";
import { DELIVERY_ROUTE, HOWTOORDER_ROUTE } from '../../utils/consts';

export const HeaderBar = () => {
  return (
    <header className={styles.info}>
        <div className={styles.location}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="27" height="27" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
        Ваш город Москва
        </div>
       <div className={styles.extraInfo}>
            <NavLink to={DELIVERY_ROUTE}>Бесплатная доставка</NavLink>
            <NavLink to={HOWTOORDER_ROUTE}>Как заказать?</NavLink>
            8 (800) 555-35-35
       </div>
    </header>
  )
}
