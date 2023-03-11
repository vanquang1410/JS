import React, {useEffect, useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import authApi from '../../../../api/AuthService';
import { useSelector } from 'react-redux';

function AccountInfoMob() {

    useEffect(() => {
		window.scrollTo(0, 0);
        getUser();
	}, []);
	
    const cart = useSelector((state) => state.cartReduce.listCart);

    const [isUser, setIsUser] = useState(false);
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

    const getUser = async () => {
        const response = await authApi.getProfile();
        if (response.status === 200) {
            setName(response.data.name);
            setAddress(response.data.address);
            setPhone(response.data.phone);
            setEmail(response.data.email);
            setIsUser(true);
        } else {
            navigate('/');
            window.location.reload();
        }
    }

    return (
        <>
            <header className="header-as-title">
                <Link to="/accsetting" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>    
                    </button>    
                </Link>  
                <div className="mob-as-title">Thông Tin Tài Khoản</div>
                <Link to={`${isUser === true ? '/cart' : '/loginMobile'}`} className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                    <span>{cart ? cart.length : 0}</span>
                </Link>
            </header>
            <main className="main-as">
                <div className="header-avatar">
                    <input type="file" id="myFile" name="myFile" accept="image/*" className="image-input"/>
                    <div className="header-avatar-view">
                        <img src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" alt="avatar" className="avatar"/>
                        <div className="edit"><img src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/edit.png" className="edit_img" alt="" width='10' height='10'/></div>
                    </div>
                </div>
                <Link to="/updname" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/user.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Họ & Tên</div>
                            <div className="info-mob-text">{name}</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/calendar.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Ngày sinh</div>
                            <div className="info-mob-text1">Thêm ngày sinh</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                {/* <Link to="/updsex" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/gender.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Giới tính</div>
                            <div className="info-mob-text1">Thêm giới tính</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link> */}
                <Link to="" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s'  src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/global.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Quốc tịch</div>
                            <div className="info-mob-text">Việt Nam</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updphonenum" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/phone.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Số điện thoại</div>
                            <div className="info-mob-text">{phone}</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updemail" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/email.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Email</div>
                            <div className="info-mob-text">{email}</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updpass" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/lock.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Đổi mật khẩu</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
            </main>
        </>    
        
    )

}

export default AccountInfoMob;