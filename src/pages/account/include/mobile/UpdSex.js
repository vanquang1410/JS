import React from "react";
import { Link } from "react-router-dom";

function UpdSex() {
    return (
        <>
            <header className="header-as-title">
                <Link to="/infomob" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>    
                    </button>    
                </Link>  
                <div className="mob-as-title">Giới tính</div>
                <Link to="" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                </Link>
            </header>
            <div className="update-container">
                <form>
                    <div className="form-container">
                        <label>Giới tính</label>
                        <label className="label-radio">
                            <input type="radio" name="gender" value="male" checked=""/>
                            <span className="radio-fake"></span>
                            <span>Nam</span>
                        </label>
                        <label className="label-radio">
                            <input type="radio" name="gender" value="female" checked=""/>
                            <span className="radio-fake"></span>
                            <span>Nữ</span>
                        </label>
                        <label className="label-radio">
                            <input type="radio" name="gender" value="other" checked=""/>
                            <span className="radio-fake"></span>
                            <span>Khác</span>
                        </label>
                    </div>
                    <button type="submit">Lưu thay đổi</button>
                </form>
            </div>
        </>
    )

}

export default UpdSex;