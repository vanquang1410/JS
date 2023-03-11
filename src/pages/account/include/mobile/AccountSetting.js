import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../../../api/AuthService';
import { useSelector } from 'react-redux';
import MenuMobile from '../../../../components/layout/MenuMobile';

function AccountSetting() {

    const cart = useSelector((state) => state.cartReduce.listCart);

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isUser, setIsUser] = useState(false);
    
    const getUser = async () => {
        const response = await authApi.getProfile();
        if (response.status === 200) {
            setUsername(response.data.username);
            setEmail(response.data.email);   
            setIsUser(true);
        } else {
            navigate('/')
            window.location.reload();
            localStorage.removeItem('accessToken');
        }
    }

    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/loginMobile');
    }

    useEffect(() => {
        getUser();
    }, []) 

    return (
        <>
            <header className="header-as-title">
                <Link to="/" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                    </button>
                </Link>
                <div className="mob-as-title">Quản lý tài khoản</div>
                <Link to={`${isUser === true ? '/cart' : '/loginMobile'}`} className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg" />
                    <span>{cart ? cart.length : 0}</span>
                </Link>
            </header>
            <main className="main-as">
                <div>
                    <div className="group">
                        <Link to="/infomob" className="gr-avatar">
                            <img width="40" height="40" src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" alt="avatar" />
                            <div className="link__content">
                                <div className="link__name">{username}</div>
                                <div className="link__email">{email}</div>
                                {/* <div className="link__created-date"><span>Thành viên từ: 03/03/2019</span></div> */}
                            </div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>

                    <div className="group">
                        <Link to="/order" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"></path></svg>
                            <div className="link__content">&ensp; Quản lý đơn hàng</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                    <div className="wrap-btn">
                        <button onClick={logout}>Đăng xuất</button>
                    </div>
                </div>
            </main>
            <MenuMobile />
        </>
    )

}

export default AccountSetting;