import { useContext } from 'react'
import React from 'react'
import { Context } from '../../index'
import styles from './NavBar.module.css'
import { observer } from "mobx-react-lite"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

export const NavBar = observer (() => {
    const {user} = useContext(Context)
  return (
    <nav  className={styles.nav}>
            <div className={styles.navbar}>
                <img src='../assets/logo.png' className={styles.NavLogo}></img>
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
                        <button>
                            Админ панель
                        </button>
                        <button>
                            Выйти
                        </button>
                    </li>
                    :
                    <li>
                        <button onClick={() => user.setIsAuth(true)}>Авторизация</button>
                    </li>
                }
                </ul>
            </div>
        </nav>
  )
}
);

export default NavBar;