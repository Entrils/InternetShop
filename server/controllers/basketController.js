const { Item, BasketItems, Basket } = require("../models/models")

class BasketController {
    // ------ CRUD корзины ------ //

    async addToBasket(req,res,next){
        const user = req.user
        const {itemId} = req.body
        const basket = await BasketItems.create({basketId : user.id, itemId : itemId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketItems.findAll({include: {
                model: Item
            }, where: {basketId: id}})

        return res.json(basket)
    }

}

module.exports = new BasketController()