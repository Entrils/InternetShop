import React, { useContext, useState } from 'react'
import styles from './Auth.module.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { login, registration } from '../../http/userAPI'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

export const Auth = observer(() => {

  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const click = async () =>{
    try{
      let data  
      if (isLogin){
        data = await login(email , password)
      } else{
        data = await registration(email , password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    }
    catch (e){
        alert(e.response.data.message)
    }
  }

  return (
    <section className={styles.content}>
      <div className={styles.card}>
        <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <div className={styles.form}>
          <input className={styles.input} placeholder='Введите ваш email...'
          value={email} onChange={e => setEmail(e.target.value)}
          />
          <input className={styles.input} placeholder='Введите ваш пароль...'
          value={password} onChange={e => setPassword(e.target.value)}
          type='password'
          />
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
            <button className={styles.Authbtn} onClick={click}>
             {isLogin ? 'Войти' : 'Зарегистрироваться'} 
            </button>
          </div>
        </div>
      </div>
      </section>
  )
});