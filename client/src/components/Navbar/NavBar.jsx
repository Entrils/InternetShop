import { useContext } from 'react'
import React from 'react'
import { Context } from '../../index'
import styles from './NavBar.module.css'
import { observer } from "mobx-react-lite"
import {NavLink} from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, BLOG_ROUTE, ABOUT_ROUTE } from '../../utils/consts'
import { useNavigate } from 'react-router-dom'

export const NavBar = observer (() => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () =>{
        user.setUser({})
        user.setIsRole({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        window.location.reload();
    }


  return (
    <nav  className={styles.nav}>
        <div className={styles.biglogo}>
        <NavLink to={SHOP_ROUTE}> <img src='../../../assets/logo.png' className={styles.NavLogo}></img></NavLink>
        <h3>ЯМИНЯМИ</h3>
        </div> 
            <div>
                <ul className={styles.navbar}>
                <li>
                <NavLink to={ABOUT_ROUTE}>О нас</NavLink>
             </li>
             <li>
             <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
             </li>
             <li>
             <NavLink to={BLOG_ROUTE}>Блог</NavLink>
             </li>
             <li>
             <a href="#">Контакты</a>
             </li>
                {user.isAuth ?
                    <li>
                         {user.isRole === 'ADMIN'?
                         <button className={styles.NavButtons} onClick={()=> navigate(ADMIN_ROUTE)}>
                         Админ панель
                        </button>
                         : <button
                            onClick={() => navigate(BASKET_ROUTE)}
                        >
                            Корзина
                        </button> }
                        
                        <button className={styles.NavButtons} onClick={()=> logOut()}>
                            Выйти
                        </button>
                    </li>
                    :
                    <li>
                        <button className={styles.NavButtons} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</button>
                    </li>
                }
                </ul>
            </div>
        </nav>
  )
}
);

export default NavBar;