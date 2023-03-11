import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Products from "../include/Products";
import {Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { isWideScreen } from "../../../helpers/screen";

const settingsSlide = {
    slidesPerView:1,
    navigation:true,
    modules:[Navigation],
    className:"adv-swiper",
}
function Container({status}) {

    function ListItem(props) {
        return(
            <li>
                <Link to="/category">{props.title}</Link>
            </li>
        )
    }
    
    function ListTitle() {
        const title = [
            'Tivi',
            'Âm thanh & Phụ kiện Tivi'
        ];
        return (
            <>
                <ul>{title.map((item, key) => <ListItem title={item} />)}</ul>
            </>
        )
    }

    const [adv,setAdv] = useState([]);

    useEffect(() => {
        const data = [
            {
               src:"https://salt.tikicdn.com/cache/w1080/ts/banner/b3/6d/bd/3538eb353010d41cd0533e7804a347ac.jpg.webp",
               title:'Ngon'
            },
            {
               src:"https://salt.tikicdn.com/cache/w1080/ts/banner/19/eb/19/b05a27bf2a1db86b74bcac1fe4be115c.png.webp",
               title:'Ngon'
            },       
          ]
    setAdv(data);
    },[])

    const navigate = useNavigate();

    return(
        <div className="container">
            <div className="category-view">
                <div className="sidebar">
                    <div>
                        <div className="sidebar-title">
                            <h4>Danh mục sản phẩm</h4>
                        </div>

                        <div className="sidebar-list">
                            <ListTitle key={1}/>
                        </div>

                        <div className="sidebar-service">
                            <h4>Dịch vụ</h4>
                            <label>
                                <input type="checkbox" onChange={() => navigate("") }/>
                                <img className="filter-icon" alt="/" src="https://salt.tikicdn.com/ts/upload/b3/21/cf/c6525bcd44b3bb1b793277cc98487799.png"/>
                                <span>Giao siêu tốc 2h</span>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <img className="filter-icon" alt="/" src="https://salt.tikicdn.com/ts/upload/08/41/4d/70e65420f4cd6203d36865b87adc2bf3.png"/>
                                <span>Chọn giờ giao lắp</span>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <img className="filter-icon" alt="/" src="https://salt.tikicdn.com/ts/upload/e9/14/26/52318ad1543ad9d3ee5b633b3df0750d.png"/>
                                <span>Thưởng thêm Astra</span>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <img className="filter-icon" alt="/" src="https://salt.tikicdn.com/ts/upload/ec/86/62/a28152ea23fd7d723d968579f3970280.png"/>
                                <span>Không giới hạn</span>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <span>Rẻ hơn hoàn tiền</span>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <span>Trả góp 0%</span>
                            </label>
                        </div>

                        <div className="sidebar-selladr">
                            <h4>Nơi bán</h4>
                            <label>
                                <input type="checkbox"/>
                                <p>Hà Nội</p>
                            </label>
                            <div className="more">
                                <Link to="*">
                                    Xem thêm
                                    <img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-rate">
                            <h4>Đánh giá</h4>
                            <div className="star">
                                <div className="star-on">
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                </div>
                                <p>từ 5 sao</p>
                            </div>
                            <div className="star">
                                <div className="star-on">
                                    &#9733;&#9733;&#9733;&#9733;
                                </div>
                                <div className="star-off">
                                    &#9733;
                                </div>
                                <p>từ 4 sao</p>
                            </div>
                            <div className="star">
                                <div className="star-on">
                                    &#9733;&#9733;&#9733;
                                </div>
                                <div className="star-off">
                                    &#9733;&#9733;
                                </div>
                                <p>từ 3 sao</p>
                            </div>
                        </div>

                        <div className="sidebar-price">
                            <h4>Giá</h4>
                            <div className="price-box"><span>Dưới 3.000.000</span></div>
                            <div className="price-box"><span>3.000.000 -&gt; 17.000.000</span></div>
                            <div className="price-box"><span>Trên 17.000.000</span></div>
                            <div className="price-small-text">Chọn khoảng giá</div>
                            <div className="input-group">
                                <input placeholder="0" type="text"></input>
                                <span>-</span>
                                <input placeholder="0" type="text"></input>
                            </div>
                            <button>Áp dụng</button>
                        </div>

                        <div className="sidebar-brand">
                            <h4>Thương hiệu</h4>
                            <label>
                                <input type="checkbox"/>
                                <p>Samsung</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>LG</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Behringer</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Panasonic</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>DAIKIN</p>
                            </label>
                            <div className="more">
                                <Link to="*">
                                    Xem thêm
                                    <img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-color">
                            <h4>Màu sắc</h4>
                            <label>
                                <input type="checkbox"/>
                                <p>Đen</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Xanh</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Bạc</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Xanh dương</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Xám</p>
                            </label>
                            <div className="more">
                                <Link to="*">
                                    Xem thêm
                                    <img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-contributor">
                            <h4>Nhà cung cấp</h4>
                            <label>
                                <input type="checkbox"/>
                                <p>Tiki Trading</p>
                            </label>
                            <div className="more">
                                <Link to="*">
                                    Xem thêm
                                    <img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-delivery">
                            <h4>Giao hàng</h4>
                            <label>
                                <input type="checkbox"/>
                                <p>Hàng Nội Địa</p>
                            </label>
                        </div>
                    </div>
                </div>


                <div className="category-right">
                    <div className="search-summary">
                        <div className="title">
                            <h1>Điện tử - Điện lạnh</h1>
                        </div>

                        <div className="adv-slide">
                            <Swiper {...settingsSlide}>
                                {
                                    adv.map((item,index) => {
                                        return(
                                            <SwiperSlide key={index}>
                                                {<img alt="/" src={item.src}/>}
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>

                        <div className="search-summary-category">
                                <div className="summary-top">
                                    <div className="top-tabs">
                                        <div className="tabs-list">
                                        { isWideScreen() &&
                                            <>
                                                <Link to="category" className="active">Phổ Biến</Link>
                                                <Link to="category" className="active">Bán Chạy</Link>
                                                <Link to="category" className="active">Hàng Mới</Link>
                                                <Link to="category" className="active">Giá Thấp Đến Cao</Link>
                                                <Link to="category" className="active">Giá Cao Đến Thấp</Link>
                                            </>
                                        }
                                        { !isWideScreen() &&
                                            <>
                                                <Link to="category" className="active">Phổ Biến</Link>
                                                <Link to="category" className="active">Bán Chạy</Link>
                                                <Link to="category" className="active">Hàng Mới</Link>
                                                <Link to="category" className="active">Giá <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.43306 0.308058C3.67714 0.0639806 4.07286 0.0639806 4.31694 0.308058L6.81694 2.80806C7.06102 3.05214 7.06102 3.44786 6.81694 3.69194C6.57286 3.93602 6.17714 3.93602 5.93306 3.69194L4.5 2.25888V10.125C4.5 10.4702 4.22018 10.75 3.875 10.75C3.52982 10.75 3.25 10.4702 3.25 10.125V2.25888L1.81694 3.69194C1.57286 3.93602 1.17714 3.93602 0.933058 3.69194C0.688981 3.44786 0.688981 3.05214 0.933058 2.80806L3.43306 0.308058ZM9.5 11.7411V3.25C9.5 2.90482 9.77982 2.625 10.125 2.625C10.4702 2.625 10.75 2.90482 10.75 3.25V11.7411L12.1831 10.3081C12.4271 10.064 12.8229 10.064 13.0669 10.3081C13.311 10.5521 13.311 10.9479 13.0669 11.1919L10.5669 13.6919C10.3229 13.936 9.92714 13.936 9.68306 13.6919L7.18306 11.1919C6.93898 10.9479 6.93898 10.5521 7.18306 10.3081C7.42714 10.064 7.82286 10.064 8.06694 10.3081L9.5 11.7411Z" fill="#38383D"></path></svg></Link>
                                            </>
                                        }
                                        </div>
                                    </div>

                                    <div className="search-navigate">
                                        <div className="paging">
                                            <span className="current">1</span>
                                            &#47;
                                            <span className="last">50</span>
                                        </div>

                                        <div className="list-arrow">
                                            <img alt="/" src="https://salt.tikicdn.com/ts/brickv2og/b0/c0/37/55863dd4fac41fc53a8ad943545973b1.png"/>
                                            <img className="right" alt="/" src="https://salt.tikicdn.com/ts/brickv2og/a8/b5/3b/3c2faee1a219b651e8bf39b1e57b9bbc.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="summary-bottom">
                                    <p className="itemsticky">
                                        <img alt="/" src="https://salt.tikicdn.com/ts/upload/b3/21/cf/c6525bcd44b3bb1b793277cc98487799.png" height="12" width="38.5"/>
                                    </p>
                                    <p className="itemsticky">
                                        <img alt="/" src="https://salt.tikicdn.com/ts/upload/08/41/4d/70e65420f4cd6203d36865b87adc2bf3.png" height="12" width="31"/>
                                    </p>
                                    <p className="itemsticky">
                                        <img alt="/" src="https://salt.tikicdn.com/ts/upload/e9/14/26/52318ad1543ad9d3ee5b633b3df0750d.png" height="12" width="62"/>
                                    </p>
                                </div>
                        </div>

                        <Products/>

                        <div className="paging-nav">
                            <ul>

                                <li><Link className="noactive"  href="/">
                                    <img alt="/" src="https://salt.tikicdn.com/ts/brickv2og/79/0d/0a/c49a190b24f4b799e16fadae76d76ce8.png" height="20" width="16"/>
                                </Link></li>
                                <li><Link to="*" className="curr">1</Link></li>
                                <li><Link to="*">2</Link></li>
                                <li><Link to="*">3</Link></li>
                                <li><Link to="*">4</Link></li>
                                <li><Link to="*">5</Link></li>
                                <li><Link to="*">
                                    <img className="noactive" alt="." src="https://salt.tikicdn.com/ts/brickv2og/c5/f9/d0/b4e49aa9576a35e347fbdeec0df9e350.png" width="20" height="20"/>
                                </Link></li>
                                <li><Link to="*">50</Link></li>
                                <li><Link to="*">
                                <img alt="/" src="https://salt.tikicdn.com/ts/brickv2og/9d/4a/fa/3c558303ba1d0f07c2d9c4f5583e0c8d.png" height="20" width="16"/>
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;
