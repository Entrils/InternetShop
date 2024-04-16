import React from 'react'
import styles from './Auth.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'

export const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <section className={styles.content}>
      <div className={styles.card}>
        <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <div className={styles.form}>
          <input className={styles.input} placeholder='Введите ваш email...'/>
          <input className={styles.input} placeholder='Введите ваш пароль...'/>
          <div className={styles.belowRow}>
            {isLogin ? 
            <div className={styles.belowRowText}>
              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            </div>
            :
            <div className={styles.belowRowText}>
            Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
          </div>
}
            <button className={styles.Authbtn}>
             {isLogin ? 'Войти' : 'Зарегистрироваться'} 
            </button>
          </div>
        </div>
      </div>
      </section>
  )
}