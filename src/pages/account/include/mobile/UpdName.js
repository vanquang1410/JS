import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../../../api/AuthService";

function UpdName() {

    const navigate = useNavigate();
    const [noti, setNoti] = useState(false);
    const [alert, setAlert] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await authApi.getProfile();
        if (response.status === 200) {
            setName(response.data.name);
            setAddress(response.data.address);
        } else {
            navigate('/');
            // window.location.reload();
        }
    }

    const updateName = async (e) => {
        e.preventDefault();
        try {
            let item = { name: name, address: address }
            const response = await authApi.updateInfo(item);
            if (response.status === 200) {
                setNoti(true);
                setAlert(false);
            }
        } catch {
            setNoti(false);
            setAlert(true);
        }
        
    }

    return (
        <>
            <header className="header-as-title">
                <Link to="/infomob" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>    
                    </button>    
                </Link>  
                <div className="mob-as-title">Họ & Tên</div>
                <Link to="" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                </Link>
            </header>
            <div className="update-container">
                <form>
                    <div className="form-container">
                        <label>Họ & Tên</label>
                        <div className="form-input">
                            <input value={name} onChange={(e) => setName(e.target.value)} name="fullName" maxlength="128" placeholder="Nhập họ &amp; tên" focused="true"/>
                            <div className="clear"/>
                        </div>
                        <div className="mess-hint">Họ & Tên gồm 2 từ trở lên.</div>
                    </div>
                    <button type="submit" onClick={updateName}>Lưu thay đổi</button>
                </form>
            </div>
        </>
    )

}

export default UpdName;