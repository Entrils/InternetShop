import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserStore from './store/UserStore'
import ItemStore from './store/ItemStore'

export const Context = createContext(null)
ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{
        user: new UserStore(),
        item: new ItemStore(),
    }}>
    <App />
    </Context.Provider>,

);
