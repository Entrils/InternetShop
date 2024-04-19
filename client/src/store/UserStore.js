import {makeAutoObservable} from 'mobx';

export default class UserStore{
    constructor(){
        this._isAuth = false
        this._user = {}
        this._isRole = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setIsRole(bool){
        this._isRole = bool
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    get isRole(){
        return this._isRole
    }
}