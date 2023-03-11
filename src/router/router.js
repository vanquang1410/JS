import React from 'react';
import NoPage from '../pages/nopage/NoPage';
import ProductDetailPage from '../pages/product_detail/ProductDetailPage';
import HomePage from '../pages/home/HomePage';
import CategoryPage from '../pages/category/CategoryPage';
// import ProductPage from '../pages/product/ProductPage';
import AccountPage from '../pages/account/AccountPage';
import AccountInfo from '../pages/account/include/AccountInfo';
import OrderManagement from '../pages/account/include/OrderManagement';
import OrderDetail from '../pages/account/include/OrderDetail';
import UpdatePin from '../pages/account/include/UpdatePin';
import UpdName from '../pages/account/include/mobile/UpdName';
import UpdEmail from '../pages/account/include/mobile/UpdEmail';
import UpdPass from '../pages/account/include/mobile/UpdPass';
import UpdPhoneNum from '../pages/account/include/mobile/UpdPhoneNum';
import UpdSex from '../pages/account/include/mobile/UpdSex';
import AccountInfoMob from '../pages/account/include/mobile/AccountInfoMob';
import AccountSetting from '../pages/account/include/mobile/AccountSetting';
import ShopCart from '../components/common/ShopCart';
import SearchPage from '../pages/search/SearchPage';
import LoginMobile from '../components/login/LoginMobile';
import RegisterMobile from '../components/login/RegisterMobile';

export const routes = () => {
    return [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: 'category/:slug-:id',
            element: <CategoryPage />
        },
        {
            path: '/:slug-:id',
            element: <ProductDetailPage />
        },
        {
            path: '*',
            element: <NoPage />
        },
        {
            path: 'account',
            element: <AccountPage />
        },
        {
            path: 'info',
            element: <AccountInfo />
        },
        {
            path: '/infomob',
            element: <AccountInfoMob />
        },
        {
            path: '/accsetting',
            element: <AccountSetting />
        },
        {
            path: '/updatepin',
            element: <UpdatePin />
        },
        {
            path: '/order',
            element: <OrderManagement />
        },
        {
            path: 'order/orderdetail/id=:id',
            element: <OrderDetail />
        },
        {
            path: '/updname',
            element: <UpdName />
        },
        {
            path: '/updemail',
            element: <UpdEmail />
        },
        {
            path: '/updpass',
            element: <UpdPass />
        },
        {
            path: '/updphonenum',
            element: <UpdPhoneNum />
        },
        {
            path: '/updsex',
            element: <UpdSex />
        },
        {
            path: '/cart',
            element: <ShopCart />
        },
        {
            path: '/search&q=:searchInput',
            element: <SearchPage />
        },
        {
            path: '/loginMobile',
            element: <LoginMobile/>
        },
        {
            path: '/registerMobile',
            element: <RegisterMobile/>
        }
    ]
}
