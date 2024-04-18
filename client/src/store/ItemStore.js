import {makeAutoObservable} from 'mobx';

export default class ItemStore{
    constructor(){
        this._types = []
        this._brands = []
        this._items = []

        this._selectedType ={}
        this._selectedBrand ={}
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

    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
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

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
}