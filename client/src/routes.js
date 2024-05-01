import {Admin} from './pages/Admin/Admin';
import { ItemPage } from './pages/ItemPage/ItemPage';
import { Basket } from './pages/Basket/Basket';
import { Auth } from './pages/Auth/Auth';
import { Shop } from './pages/Shop/Shop';
import {Blog} from './pages/Blog/Blog';
import {About} from './pages/About/About';
import {ADMIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, ITEM_ROUTE, SHOP_ROUTE, ABOUT_ROUTE, BLOG_ROUTE, DELIVERY_ROUTE, HOWTOORDER_ROUTE} from './utils/consts'
import { FreeDelivery } from './pages/FreeDelivery/FreeDelivery';
import { HowToOrder } from './pages/HowToOrder/HowToOrder';

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
        path: BLOG_ROUTE,
        Component: Blog
    },
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
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: DELIVERY_ROUTE,
        Component: FreeDelivery
    },
    {
        path: HOWTOORDER_ROUTE,
        Component: HowToOrder
    },
]