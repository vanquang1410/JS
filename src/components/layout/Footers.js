import React from "react";
import { Link } from "react-router-dom";
import { isWideScreen } from "../../helpers/screen";

import { useTheme } from "../utils/useTheme";

export default function Footers() {
  // const cate = Array.from(Array(10).keys());

  const EmailContact = () => {
    return (
      <div className="cm-width">
        <div className={`new-letter`}>
          <div className="new-letter-content">
            <h3 className="heading">Newsletters</h3>
            <p className="sub-heading">
              Most popular gaming digital nft market place{" "}
            </p>
          </div>
          <div className="new-letter-input">
            <div className="form-subcribe">
              <form
                id="subscribe-form"
                action="#"
                method="GET"
                acceptCharset="utf-8"
                className="form-submit"
              >
                <input
                  name="email"
                  value=""
                  className="email"
                  type="email"
                  placeholder="Nhập địa chỉ email của bạn"
                  required
                  readOnly
                />
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="sc-button "
                >
                  <span>Browse More</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const theme = useTheme();
  return (
    <>
      {isWideScreen() && 
      <>
      <EmailContact />
      <footer className={theme}>
        <div className="style-information">
          <div className="cm-width d-flexs">
            <div className="block">
              <h4>Hỗ trợ khách hàng</h4>
              <p className="hot-line">
                Hotline: <Link to="/">0385044649</Link>
                <span className="small-text1">
                  (1000 đ/phút, 8-21h kể cả T7, CN)
                </span>
              </p>
              <Link to="/" className="small-text">
                Các câu hỏi thường gặp
              </Link>
              <Link to="/" className="small-text">
                Gửi yêu cầu hỗ trợ
              </Link>
              <Link to="/" className="small-text">
                Hướng dẫn đặt hàng
              </Link>
              <Link to="/" className="small-text">
                Phương thức vận chuyển
              </Link>
              <Link to="/" className="small-text">
                Chính sách đổi trả
              </Link>
              <Link to="/" className="small-text">
                Hướng dẫn trả góp
              </Link>
              <Link to="/" className="small-text">
                Chính sách hàng nhập khẩu
              </Link>

              {/* <p className="security">
              Hỗ trợ khách hàng: <Link to="/">hotro@tiki.vn</Link>
            </p>
            <p className="security mb-0">
              Báo lỗi bảo mật: <Link to="/">security@tiki.vn</Link>
            </p> */}
            </div>
            <div className="block">
              <h4>Về chúng tôi</h4>

              <Link to="/" className="small-text">
                Địa chỉ: 55 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội.
              </Link>
              <Link to="/" className="small-text">
                Số điện thoại: 0385044649
              </Link>
              <Link to="/" className="small-text">
                Email: laithedung28563@gmail.com
              </Link>
            </div>
            <div className="block">
              <h4>Hợp tác và liên hệ</h4>
              <Link to="/" className="small-text">
                Quy chế hoạt động Sàn GDTMĐT
              </Link>
              <Link to="/" className="small-text">
                Bán hàng cùng Hasaki
              </Link>
              <h4>Chứng nhận bởi</h4>
              <div className="d-flex">
                <Link to="/">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                    width="32"
                    height="32"
                    alt="12"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                    width="83"
                    height="32"
                    alt="test"
                  />
                </Link>
              </div>
            </div>
            <div className="block">
              <h4>Phương thức thanh toán</h4>
              <p className="small-text">Thanh toán khi nhận hàng</p>
              <p className="small-text">
                Kiểm tra sản phẩm trước khi nhận hàng
              </p>
              {/*<p className="payment">*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
              {/*</p>*/}
              <h4>Dịch vụ giao hàng</h4>
              <p>
                {/*<Link to="/">*/}
                {/*<img src="https://static.wixstatic.com/media/6e68b4_245b828eb23a404b9aba586a8fb0292c~mv2.png/v1/crop/x_39,y_33,w_200,h_99/fill/w_110,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/images.png" width="68" height="33" alt="test" />*/}
                {/*</Link>*/}
              </p>
            </div>
            <div className="block">
              <h4>Kết nối với chúng tôi</h4>

              <div className="widget-social">
                <ul style={{ color: "#fff" }}>
                  <li>
                    <a
                      href="https://www.facebook.com/laidung0506"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@laidung0506"
                      target="_blank"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCBEKR_dweKvZK2lAdnJ073Q"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <p>
              <Link to="/">
                <img
                  className="icon"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                  width="32"
                  height="32"
                  alt="test"
                />
              </Link>
              <Link to="/">
                <img
                  className="icon"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                  width="32"
                  height="32"
                  alt="test"
                />
              </Link>
              <Link to="/">
                <img
                  className="icon"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                  width="32"
                  height="32"
                  alt="test"
                />
              </Link>
            </p> */}
              <h4 className="store-title">Tải ứng dụng trên điện thoại</h4>
              <div className="d-flex">
                {/*<img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" height="80" width="80" alt="test" />*/}
                {/*<div className="dowload-app">*/}
                {/*<Link to="/">*/}
                {/*    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="122" alt="test" />*/}
                {/*</Link>*/}
                {/*<Link to="/">*/}
                {/*    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width="122" alt="test" />*/}
                {/*</Link>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </footer></>}
      {!isWideScreen && (<></>)}
    </>

    // <footer>
    //     <div className="style-information">
    //         <div className="cm-width d-flexs">
    //             <div className="block">
    //                 <h4>Hỗ trợ khách hàng</h4>
    //                 <p className="hot-line">
    //                 Hotline: <Link to="/">1900-6035</Link>
    //                 <span className="small-text1">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
    //                 </p>
    //                 <Link to="/" className="small-text">Các câu hỏi thường gặp</Link>
    //                 <Link to="/" className="small-text">Gửi yêu cầu hỗ trợ</Link>
    //                 <Link to="/" className="small-text">Hướng dẫn đặt hàng</Link>
    //                 <Link to="/" className="small-text">Phương thức vận chuyển</Link>
    //                 <Link to="/" className="small-text">Chính sách đổi trả</Link>
    //                 <Link to="/" className="small-text">Hướng dẫn trả góp</Link>
    //                 <Link to="/" className="small-text">Chính sách hàng nhập khẩu</Link>

    //                 <p className="security">
    //                 Hỗ trợ khách hàng: <Link to="/">hotro@tiki.vn</Link>
    //                 </p>
    //                 <p className="security mb-0">
    //                 Báo lỗi bảo mật: <Link to="/">security@tiki.vn</Link>
    //                 </p>
    //             </div>
    //             <div className="block">
    //                 <h4>Về chúng tôi</h4>

    //                 <Link to="/" className="small-text">Địa chỉ:Ký túc xá bách khoa, Trần đại nghĩa,  thành phố Hà Nội.</Link>
    //                 <Link to="/" className="small-text">Số điện thoại: 1900-3107</Link>
    //                 <Link to="/" className="small-text">CEmail: Tataa@hasaki.com</Link>
    //             </div>
    //             <div className="block">
    //                 <h4>Hợp tác và liên hệ</h4>
    //                 <Link to="/" className="small-text">Quy chế hoạt động Sàn GDTMĐT</Link>
    //                 <Link to="/" className="small-text">Bán hàng cùng Hasaki</Link>
    //                 <h4>Chứng nhận bởi</h4>
    //                 <div className="d-flex">
    //                 <Link to="/">
    //                     <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="12"/>
    //                 </Link>
    //                 <Link to="/">
    //                     <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" width="83" height="32" alt="test"/>
    //                 </Link>
    //                 </div>
    //             </div>
    //             <div className="block">
    //                 <h4>Phương thức thanh toán</h4>
    //                 {/*<p className="payment">*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />*/}
    //                 {/*</p>*/}
    //                 <h4>Dịch vụ giao hàng</h4>
    //                 <p>
    //                     {/*<Link to="/">*/}
    //                     {/*<img src="https://static.wixstatic.com/media/6e68b4_245b828eb23a404b9aba586a8fb0292c~mv2.png/v1/crop/x_39,y_33,w_200,h_99/fill/w_110,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/images.png" width="68" height="33" alt="test" />*/}
    //                     {/*</Link>*/}
    //                 </p>
    //             </div>
    //             <div className="block">
    //                 <h4>Kết nối với chúng tôi</h4>
    //                 <p>
    //                     <Link to="/">
    //                     <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
    //                     </Link>
    //                     <Link to="/">
    //                     <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
    //                     </Link>
    //                     <Link to="/">
    //                     <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
    //                     </Link>
    //                 </p>
    //                 <h4 className="store-title">Tải ứng dụng trên điện thoại</h4>
    //                 <div className="d-flex">
    //                     {/*<img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" height="80" width="80" alt="test" />*/}
    //                     {/*<div className="dowload-app">*/}
    //                     {/*<Link to="/">*/}
    //                     {/*    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="122" alt="test" />*/}
    //                     {/*</Link>*/}
    //                     {/*<Link to="/">*/}
    //                     {/*    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width="122" alt="test" />*/}
    //                     {/*</Link>*/}
    //                     {/*</div>*/}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </footer>

    
  );
}
