import { ArrowLeftOutlined} from '@ant-design/icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../api/AuthService';

export default function RegisterMobile() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [noti, setNoti] = useState(false);

    async function signUp(e) {
        e.preventDefault();
        try {
            setNoti(false);
            let item = { name, email, username, phone, password, address }
            let result = await authApi.register(item);

            if (result.status === 200 && result.status !== 500) {
                localStorage.setItem('user', JSON.stringify(result.data));
                const token = localStorage.getItem('user');
                const tokenString = JSON.parse(token);
                localStorage.setItem('accessToken', tokenString.accessToken);
                navigate('/');
                window.location.reload();
            }
        } catch (e) {
            if (!name)
                setNameError('Tên không được bỏ trống!');

            if (!email)
                setEmailError('Email không được bỏ trống!');
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i.test(email))
                setEmailError("Email không hợp lệ!");

            if (!username)
                setUsernameError('Tên đăng nhập không được bỏ trống!');

            const phoneRegex = /[0-9]/;
            if (!phone)
                setPhoneError('Số điện thoại không được bỏ trống!');
            else if (phone.length < 10 || !phoneRegex.test(phone))
                setPhoneError("Số điện thoại phải chứa ít nhất 10 chữ số!");

            const passwordRegex = /(?=.*[0-9])/;
            if (!password) {
                setPasswordError("Mật khẩu không được bỏ trống!");
            } else if (password.length < 8) {
                setPasswordError("Mật khẩu phải chứa ít nhất 8 kí tự!");
            } else if (!passwordRegex.test(password)) {
                setPasswordError("Mật khẩu phải chứa chữ số!");
            }

            if (!address)
                setAddressError('Địa chỉ không được bỏ trống!');

            if (name && email && username && phone && password && address) {
                setNoti(true);
                localStorage.clear();
            }
        }

    }

    return (
        <div className='login-mobile'>
            <header>
                <Link to='/'>
                    <ArrowLeftOutlined />
                </Link>
                <img src="https://salt.tikicdn.com/ts/upload/38/1a/0c/c9160ec942ae0348aae9bdad444f6ac5.jpg" alt="anh"/>
            </header>
            <div className='login-form'>
                <h3 className='fs-24'>Đăng ký tài khoản</h3>
                <label className="text-title" htmlFor="name" style={{ fontSize: 16 }}>
                    Họ và tên
                </label>
                <input
                    name="name"
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setNameError('') }}
                    className={
                        nameError && "error"
                    }
                    style={{ fontSize: 14, marginBottom: 10 }}
                />
                {nameError && (
                    <div className="input-feedback">
                        {nameError}
                    </div>
                )}
                <label
                    className="text-title"
                    htmlFor="username"
                    style={{ fontSize: 16 }}
                >
                    Tên đăng nhập
                </label>
                <input
                    name="username"
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setUsernameError('');
                    }}
                    className={
                        usernameError &&
                        "error"
                    }
                    style={{ fontSize: 14, marginBottom: 10 }}
                />
                {usernameError && (
                    <div className="input-feedback">
                        {usernameError}
                    </div>
                )}
                <label
                    className="text-title"
                    htmlFor="password"
                    style={{ fontSize: 16 }}
                >
                    Mật khẩu
                </label>
                <input
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError('');
                    }}
                    className={
                        passwordError &&
                        "error"
                    }
                    style={{ fontSize: 14, marginBottom: 10 }}
                />
                {passwordError && (
                    <div className="input-feedback">
                        {passwordError}
                    </div>
                )}
                <label className="text-title" htmlFor="email" style={{ fontSize: 16 }}>
                    Email
                </label>
                <input
                    name="email"
                    type="text"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
                    className={
                        emailError && "error"
                    }
                    style={{ fontSize: 14, marginBottom: 10 }}
                />
                {emailError && (
                    <div className="input-feedback">
                        {emailError}
                    </div>
                )}
                <label className="text-title" htmlFor="phone" style={{ fontSize: 16 }}>
                    Số điện thoại
                </label>
                <input
                    name="phone"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setPhoneError('') }}
                    className={
                        phoneError && "error"
                    }
                    style={{ fontSize: 14, marginBottom: 10 }}
                    maxLength='10'
                />
                {phoneError && (
                    <div className="input-feedback">
                        {phoneError}
                    </div>
                )}
                <label className="text-title" htmlFor="address" style={{ fontSize: 16 }}>
                    Địa chỉ
                </label>
                <input
                    name="address"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value); setAddressError('') }}
                    className={
                        addressError &&
                        "error"
                    }
                    style={{ fontSize: 14, marginBottom: 10 }}
                />
                {addressError && (
                    <div className="input-feedback">
                        {addressError}
                    </div>
                )}
                <button className='continue w-100' onClick={signUp}>Tiếp tục</button>
                {noti === true ? (<>
                    <div className="unauth">Thông tin chưa đúng hoặc đã tồn tại. Vui lòng nhập lại!</div>
                </>)
                    :
                    (<></>)
                }
                <div className='login-by' onClick={() => navigate('/loginMobile')}>Đăng nhập</div>
                <p className='continue-by'> Hoặc tiếp tục bằng</p>
                <div className='icon'>
                    <img src="https://salt.tikicdn.com/ts/upload/30/c4/e4/5c2b91f593e76ce4dedd85273e5a152b.png" alt='fb'/>
                    <img src='https://salt.tikicdn.com/ts/upload/09/13/93/407938979ce5af2e22251cd979bf5e9f.png' alt='gg'/>
                </div>
            </div>
        </div>
    )
}