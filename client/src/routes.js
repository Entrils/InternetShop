import {Admin} from './pages/Admin/Admin';
import { ItemPage } from './pages/ItemPage/ItemPage';
import { Basket } from './pages/Basket/Basket';
import { Auth } from './pages/Auth/Auth';
import { Shop } from './pages/Shop/Shop';
import {ADMIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, ITEM_ROUTE, SHOP_ROUTE} from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
]