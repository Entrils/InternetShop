import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar/NavBar';
import {observer} from 'mobx-react-lite'
import { Context } from './index';
import {check} from './http/userAPI'
import { Spinner } from 'react-bootstrap';
import styles from './App.module.css'
import { HeaderBar } from './components/HeaderBar/HeaderBar';

const App = observer(() => {

  const {user, item} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      check().then(data => {
           user.setIsRole(data.role)
            user.setUser(data.id)
            user.setIsAuth(true)  
      }).finally(()=> setLoading(false))
    }, 1000)
    
  }, []
  )

  if(loading){
    return <Spinner 
    animation={'grow'}>

    </Spinner>
  }

  return (
<div className={styles.App}>
     <BrowserRouter>
      <HeaderBar />
      <NavBar />
      <AppRouter />
    </BrowserRouter>
    </div>
  );
});

export default App;