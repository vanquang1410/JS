import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterDesktop from "./RegisterDesktop";
import LoginDesktop from "./LoginDesktop";

export default () => {
    const [isShow, setIsShow] = useState(true);
    const [isRegister, setIsRegister] = useState(false);

    return (
        <>
            {isShow ? (
                <div className="login-desktop">
                    <div className="login-desktop-container">
                        <div className="login-desktop-content">
                            <button
                                className="button-close"
                                onClick={() => setIsShow(false)}
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
                                    alt="sdf"
                                />
                            </button>
                            <div className="login-left">
                                <div className="login-left-content">
                                    {isRegister === false ? (
                                        <>
                                            <LoginDesktop />
                                            <div className="login-with-login">
                                                Bạn chưa có tài khoản?{" "}
                                                <p
                                                    onClick={() =>
                                                        setIsRegister(true)
                                                    }
                                                >
                                                    Đăng ký
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <RegisterDesktop />
                                            <div className="login-with-login">
                                                <p
                                                    onClick={() =>
                                                        setIsRegister(false)
                                                    }
                                                >
                                                    Đăng nhập bằng email
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="login-right">
                                {/*<img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="sad" width='203' height='203' />*/}
                                <div className="login-right-content">
                                    <h4>Mua sắm tại Hasaki</h4>
                                    <span>Siêu ưu đãi mỗi ngày</span>
                                </div>
                                <div className="login-right-footer">
                                    <p className="login-footer-text1">
                                        <span>Hoặc tiếp tục bằng</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                                                alt="ads"
                                                width="38"
                                                height="38"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                                                alt="ads"
                                                width="38"
                                                height="38"
                                            />
                                        </li>
                                    </ul>
                                    <p className="note">
                                        Bằng việc tiếp tục, bạn đã chấp nhận{" "}
                                        <Link to="/">điều khoản sử dụng</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
