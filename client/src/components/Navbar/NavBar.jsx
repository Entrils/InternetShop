import { useContext } from 'react'
import React from 'react'
import { Context } from '../../index'
import styles from './NavBar.module.css'
import { observer } from "mobx-react-lite"
import {NavLink} from "react-router-dom";
import { SHOP_ROUTE } from '../../utils/consts'

export const NavBar = observer (() => {
    const {user} = useContext(Context)
  return (
    <nav  className={styles.nav}>
            <div className={styles.navbar}>
                <NavLink to={SHOP_ROUTE}> <img src='../assets/logo.png' className={styles.NavLogo}></img> </NavLink>
                <ul className={styles.navbar}>
                <li>
             <a href="#">О нас</a>
             </li>
             <li>
             <a href="#">Товары</a>
             </li>
             <li>
             <a href="#">Блог</a>
             </li>
             <li>
             <a href="#">Контакты</a>
             </li>
                {user.isAuth ?
                    <li>
                        <button className={styles.NavButtons}>
                            Админ панель
                        </button>
                        <button className={styles.NavButtons}>
                            Выйти
                        </button>
                    </li>
                    :
                    <li>
                        <button className={styles.NavButtons} onClick={() => user.setIsAuth(true)}>Авторизация</button>
                    </li>
                }
                </ul>
            </div>
        </nav>
  )
}
);

export default NavBar;