import {makeAutoObservable} from 'mobx';

export default class ItemStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Лакрица'},
            {id: 2, name: 'Червячки'}
        ]
        this._brands = [
            {id: 1, name: 'Мармеладный рай'},
            {id: 2, name: 'Мармеладный ад'},
        ]
        this._items = [
            {id: 1, name: 'Чупапи про', price: 1000, rating: 5, img: 'https://img.freepik.com/free-photo/colorful-candies-jelly-and-marmalade-unhealthy-sweets_114579-13261.jpg?w=1060&t=st=1713218306~exp=1713218906~hmac=7ee6be877c5865923412bbd3eb30996fbaa212c251c7729e3960e8d3636212b7'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setItems(items){
        this._items = items
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get items(){
        return this._items
    }
}