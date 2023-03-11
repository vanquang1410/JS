import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../../../api/AuthService";

function UpdPass() {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [noti, setNoti] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        getUser();
    },[])

    const getUser = async () => {
        const response = await authApi.getProfile();
        if (response.status === 200) {
            setPassword(response.data.password)
        } else {
            navigate('/');
            // window.location.reload();
        }
    }

    const [password_old, setPassword_old] = useState("");
    const [password_new, setPassword_new] = useState("");
    const [password_confirm, setPassword_confirm] = useState("");

    async function updatePassword(e) {
        e.preventDefault();
        try {
            let item = {password_old, password_new, password_confirm}
            const response = await authApi.updatePassword(item);
            if (response.status === 200) {
                setNoti(true);
                setAlert(false);
            }
        } catch {
            setNoti(false);
            setAlert(true);
        }
        
    }

    const [showPass, setShowPass] = useState(false);

    function ShowPassword() {
        setShowPass(!showPass);
    }

    return (
        <>
            <header className="header-as-title">
                <Link to="/infomob" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                    </button>
                </Link>
                <div className="mob-as-title">Đổi mật khẩu</div>
                <Link to="" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg" />
                </Link>
            </header>
            <div className="update-container">
                <form>
                    <div className="form-pass-control">
                        <label className="input-pass-label">
                            Mật khẩu hiện tại
                        </label>
                        <div className="input-pass-box">
                            <input className="input-pass-box1" placeholder="Nhập mật khẩu hiện tại" type={showPass ? "text" : "password"}
                                            value={password_old} onChange={(e) => setPassword_old(e.target.value)}></input>
                            <img onClick={ShowPassword} className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24" />
                        </div>
                    </div>
                    <div className="form-pass-control">
                        <label className="input-pass-label">
                            Mật khẩu mới
                        </label>
                        <div className="input-pass-box">
                            <input className="input-pass-box1" placeholder="Nhập mật khẩu mới"   type={showPass ? "text" : "password"}
                                            value={password_new} onChange={(e) => setPassword_new(e.target.value)}></input>
                            <img onClick={ShowPassword} className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24" />
                        </div>
                        <div className="hint-pass-new"> Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số</div>

                    </div>
                    <div className="form-pass-control">
                        <label className="input-pass-label">
                            Nhập lại mật khẩu mới
                        </label>
                        <div className="input-pass-box">
                            <input className="input-pass-box1" placeholder="Nhập lại mật khẩu mới" type={showPass ? "text" : "password"}
                                            value={password_confirm} onChange={(e) => setPassword_confirm(e.target.value)}></input>
                            <img onClick={ShowPassword} className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24" />
                        </div>
                    </div>
                    <button type="submit" onClick={updatePassword}>Lưu thay đổi</button>
                    { noti === true && <p style={{ color: 'green', fontSize: 14, textAlign: 'center' }}>Thay đổi thành công!</p>}
                    { alert === true && <p style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>Thay đổi thất bại!</p>}
                </form>
            </div>
        </>
    )

}

export default UpdPass;