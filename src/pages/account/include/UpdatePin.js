import React, {useState} from 'react';
 
function UpdatePin() {

    const [isShow, setIsShow] = useState(true);

    return (
        <>  
            { isShow ? (
            <div className="right-container">
                <div className="info-popup">
                    <div className="up-pin-container">
                        <button className="button-close" onClick={() => setIsShow(false)}><img src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" alt="sdf" /></button>
                        <span><p>Thiết lập mã PIN</p></span>
                        <div className="left-pin">
                            <div className="left-pin-title">
                                Xác minh số điện thoại
                            </div>
                            <div className="left-pin-container">
                                Để bắt đầu thiết lập mã PIN, vui lòng xác minh bằng mã <br/> OTP gửi qua số điện thoại của bạn
                            </div>
                        </div>
                        <div className="right-pin">
                            <button>Lấy mã OTP</button>
                            <div className="right-pin-text">
                                Đổi số điện thoại? Liên hệ Hotline <a href='zxc'>1900-6035</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            ):(<></>)}
        </>
    )

}

export default UpdatePin;