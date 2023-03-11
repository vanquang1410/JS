import { ArrowLeftOutlined} from '@ant-design/icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../api/AuthService';

export default function LoginMobile() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [noti, setNoti] = useState(false);
    // const dispatch = useDispatch();

    async function loginUser(e) {
        e.preventDefault();
        try {
            setNoti(false);
            let item = { username, password };
            let results = await authApi.login(item);
            console.log('--------- results: ', results);
            if (results.status === 200) {
                localStorage.setItem("user", JSON.stringify(results.data));
                const token = localStorage.getItem("user");
                const tokenString = JSON.parse(token);
                localStorage.setItem("accessToken", tokenString.accessToken);
                // dispatch(setTokenLogin(results.data));
                // dispatch(setTokenLogin(tokenString.accessToken));
                navigate('/');
                window.location.reload();
            } else {
                if (!username)
                    setUsernameError("Tên đăng nhặp không được bỏ trống!");
                if (!password)
                    setPasswordError("Mật khẩu không được bỏ trống!");
                if (username && password)
                    setNoti(true);
            }
        } catch (e) {
            console.log('---Erorlogin');
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
                <h3 className='fs-24'>Xin chào,</h3>
                <p className='fs-14'>Đăng nhập hoặc tạo tài khoản</p>
                <input
                    name="username"
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); setUsernameError('') }
                    }
                    className={
                        usernameError &&
                        "error"
                    }
                    style={{ fontSize: 18 }}
                />
                {usernameError && (
                    <div className="input-feedback">
                        {usernameError}
                    </div>
                )}
                <input
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }
                    }
                    className={
                        passwordError &&
                        "error"
                    }
                    style={{ fontSize: 18 }}
                />
                {passwordError && (
                    <div className="input-feedback">
                        {passwordError}
                    </div>
                )}
                <button className='continue w-100' onClick={loginUser}>Tiếp tục</button>
                {noti === true ? (<>
                    <div className="unauth">Sai tên đăng nhập hoặc mật khẩu!</div>
                </>)
                    :
                    (<></>)
                }
                <div className='login-by' onClick={() => navigate('/registerMobile')}>Đăng ký</div>
                <p className='continue-by'> Hoặc tiếp tục bằng</p>
                <div className='icon'>
                    <img src="https://salt.tikicdn.com/ts/upload/30/c4/e4/5c2b91f593e76ce4dedd85273e5a152b.png" alt='fb'/>
                    <img src='https://salt.tikicdn.com/ts/upload/09/13/93/407938979ce5af2e22251cd979bf5e9f.png' alt='gg'/>
                </div>
                <p className='footer'>Bằng việc tiếp tục bạn phải chấp nhận điều khoản sử dụng</p>
            </div>
        </div>
    )
}