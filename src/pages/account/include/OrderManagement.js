import React, { useState, useEffect } from "react";
import SideNavBar from "./SideNavBar";
import { Link, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import cartApi from "../../../api/CartService";
import Skeleton from "react-loading-skeleton";
import authApi from "../../../api/AuthService";
import { isWideScreen } from "../../../helpers/screen";
import { useSelector } from "react-redux";

let page = 1;
let page_size = 100;

function OrderManagement() {

    const cart = useSelector((state) => state.cartReduce.listCart);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [orderList, setOrderList] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [del, setDel] = useState(true);
    const [viewMore, setViewMore] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [defaultTab, setDefaultTab] = useState(true);
    const [tabNum, setTabNum] = useState(); // match(tabNum)
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    ///const [input, setInput] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [isUser, setIsUser] = useState(false);

    const getProfile = async () => {
        const response = await authApi.getProfile();
        if (response.status !== 200) {
            navigate('/');
            window.location.reload();
        } else {
            setName(response.data.name);
            setIsUser(true);
        }
    }

    useEffect(() => {
        getProfile();
        showTab();
        activeTab();
    }, []);

    const getOrderList = async () => {

        const response = await cartApi.getTransaction(page, page_size);
        console.log('--------- response: ', response);
        if (response.status === 200) {
            setLoading(false);
            setOrderList(response.data);
        }
    }

    // const handleSearch = () => {
    //     setInputSearch(input);
    //     if (!inputSearch) {
    //         setShowSearch(false);
    //     } else {
    //         setShowSearch(true);
    //     }
    // }

    const showTab = async () => {
        const response = await cartApi.showConfig();
        if (response.status === 200) {
            setTabs(response.data.status);
        }
    }

    const handleClickTab = async (tab) => {
        console.log('--------------- tab: ', tab);
        let paramsQuery = location.search;
        let query = new URLSearchParams(paramsQuery);
        let value = query.get('value');

        if (value) {
            value = tab;
        }

        if (tab == 1) {
            setActive1(!active1);
        }
        if (tab == 2) {
            setActive2(!active2);
        }
        if (tab == 3) {
            setActive3(!active3);
        }
        if (!tab) {
            setDefaultTab(true);
        }
        // có tồn tại number && value là gì

        console.log('--------------- value: ', value);
        let params = {
            value: `${tab ? value : 'all'}`,
        };
        const options = {
            search: decodeURIComponent(`?${createSearchParams(params)}`),
        };
        navigate(options, { replace: true });
    }

    const activeTab = () => {
        let paramsQuery = location.search;
        let query = new URLSearchParams(paramsQuery);
        let value = query.get('value');
        console.log(value);

        if (value) {
            if (value.includes(1)) {
                // setActive1(true); 
                setDefaultTab(false);
            }
            if (value.includes(2)) {
                // setActive2(true); 
                setDefaultTab(false);
            }
            if (value.includes(3)) {
                // setActive3(true); 
                setDefaultTab(false);
            } 
        } else {
            setDefaultTab(true);
        }
    }

    const handleClose = () => {
		setIsShow(false);
	};

    const removeOrder = async (id) => {
        const response = await cartApi.deleteTransaction(id);
        if(response.status === 200) {
            setDel(!del);
            setIsShow(true);
        }
    }

    useEffect(() => {
        getOrderList();
    },[del]);

    function changeTab(tabNumber) {
        let tabActive = tabs.map(item => {
            item.tab = item.value == tabNumber;
            setTabNum(tabNumber);
            return item;
        })
        setTabs(tabActive);
    }

    return(
        <>
            { isWideScreen() &&
                <>
                {loading === true ? (
                    <div className="container">
                        <div className="page-container">
                            <div className="category-title">
                                <Skeleton count={1} width={180} height={30} style={{marginLeft: "-15px", marginTop: '20px'}}/>
                            </div>
                            <Skeleton height={300} width={180} style={{marginTop: "10px"}}/>
                            <div className="right-container" >
                                <div className="heading-title">
                                    <Skeleton count={1} width={300} height={40} style={{marginLeft: "20px"}}/>
                                </div>
                                <div className="info-page">
                                    <Skeleton width={1040} height={500} style={{marginLeft: "20px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) :
                    (<>
                        <div className="container">
                            <div className="category-title">
                                <Link to='/'>Trang chủ</Link>
                                <img alt="/" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo='></img>
                                <h4>Đơn hàng của tôi</h4>
                            </div>
                            <div className="page-container">
                            <SideNavBar/>
                                <div className="right-container" >
                                    <div className="heading-title">
                                        Đơn hàng của tôi
                                    </div>
                                    <div className="order-tablist">
                                        <div className={`order-tab${defaultTab === true ?  '-active' : ''}`} onClick={() => { setDefaultTab(true); handleClickTab() }}>Tất cả đơn</div>
                                        { tabs.map((item, index) => (
                                            <div className={`order-tab${defaultTab === false && item.tab ? '-active' : ''}`} key={index} onClick={() => {changeTab(item.value); setDefaultTab(false); handleClickTab(item.value)}}>{item.name}</div>
                                        ))}
                                    </div>
                                    {/* <div className="order-search-input">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#808089" className="icon-left" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                                        <input className="search-input-bar" type='search' 
                                            value={input} onChange={(e) => setInput(e.target.value)} 
                                            placeholder="Tìm đơn hàng theo ID" 
                                            onKeyPress={event => {
                                            if(event.key === 'Enter') {
                                                handleSearch();
                                            }
                                        }}></input>
                                        <div className="search-input-right" onClick={handleSearch}>Tìm đơn hàng</div>
                                    </div> */}
                                    <div className="order-container">
                                        { defaultTab === true &&
                                            orderList.length > 0 && orderList.map((item, index) =>
                                                item.t_name === name &&
                                                <>
                                                    <div className="list-item" key={index}>
                                                        <div className="list-order">
                                                            <span>Đơn hàng số {item.id}</span>
                                                        </div>
                                                        {item.orders.map((item2, index) =>
                                                            viewMore === true ? (
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="list-product-price">
                                                                                <span>{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            ))
                                                            ) : ( index < 2 &&
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="list-product-price">
                                                                                <span>{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )
                                                        )}
                                                        {(item.orders.length -2) > 0 &&
                                                            viewMore === false ?
                                                            (
                                                                <>
                                                                    <div className='view-more'>
                                                                        Và {item.orders.length-2} sản phẩm...
                                                                    </div>
                                                                </>
                                                            ) : (<></>)}
                                                        <div className="list-total">
                                                            <span>Tổng tiền:</span> {item.t_total_money.toLocaleString()} ₫
                                                        </div>
                                                        <div className="group-btn-order">
                                                            <button className="btn-order" onClick={() => removeOrder(item.id)}>Xóa</button>
                                                            {/* <Link to=''><button className="btn-order">Mua lại</button></Link> */}
                                                            <Link to={`./orderdetail/id=${item.id}`}><button className="btn-order">Xem chi tiết</button></Link>
                                                        </div>
                                                        <div className="list-seperate"/>
                                                    </div>
                                                </>
                                            )
                                        
                                        }
                                        { defaultTab === false &&
                                            orderList.length > 0 && orderList.map((item, index) =>
                                                item.t_status == tabNum && item.t_name === name &&
                                                <>
                                                    <div className="list-item" key={index}>
                                                        <div className="list-order">
                                                            <span>Đơn hàng số {item.id}</span>
                                                        </div>
                                                        {item.orders.map((item2, index) =>
                                                            viewMore === true ? (
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="list-product-price">
                                                                                <span>{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            ))
                                                            ) : ( index < 2 &&
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="list-product-price">
                                                                                <span>{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )
                                                        )}
                                                        {(item.orders.length -2) > 0 &&
                                                            viewMore === false ?
                                                            (
                                                                <>
                                                                    <div className='view-more'>
                                                                        Và {item.orders.length-2} sản phẩm...
                                                                    </div>
                                                                </>
                                                            ) : (<></>)}
                                                        <div className="list-total">
                                                            <span>Tổng tiền:</span> {item.t_total_money.toLocaleString()} ₫
                                                        </div>
                                                        <div className="group-btn-order">
                                                            <button className="btn-order" onClick={() => removeOrder(item.id)}>Xóa</button>
                                                            {/* <Link to=''><button className="btn-order">Mua lại</button></Link> */}
                                                            <Link to={`./orderdetail/id=${item.id}`}><button className="btn-order">Xem chi tiết</button></Link>
                                                        </div>
                                                        <div className="list-seperate"/>
                                                    </div>
                                                </>
                                            )
                                        }
                                    
                                    </div>
                                </div>
                            </div>
                            { isShow === true && (
                                <div className='alert-cart'>
                                    <div className="alert-cart-container">
                                        <div className="alert-cart-content">
                                            <div>
                                                <img width='20' height='20' alt='sc' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3KoNpySX6KZDN0GJtebbCnuYtu2FIClZGA&usqp=CAU'/>
                                                <h4>Xóa thành công</h4>
                                            </div>
                                            <button className="button-close1" onClick={handleClose}>Đóng</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
                </>
            }
            { !isWideScreen() &&
    
                loading === true ? (
                    <div className="container">
                        <div className="page-container">
                            <div className="category-title">
                                <Skeleton count={1} width={180} height={30} style={{marginLeft: "-15px", marginTop: '20px'}}/>
                            </div>
                            <Skeleton height={300} width={180} style={{marginTop: "10px"}}/>
                            <div className="right-container">
                                <div className="heading-title">
                                    <Skeleton count={1} width={300} height={40} style={{marginLeft: "20px"}}/>
                                </div>
                                <div className="info-page">
                                    <Skeleton width={1040} height={500} style={{marginLeft: "20px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) :
                    (<>
                        <div className="container">
                            <div className="header-as-title">
                                <Link to="/accsetting" >
                                    <button className="btn-back">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>    
                                    </button>    
                                </Link>  
                                <div className="mob-as-title">Quản lý đơn hàng</div>
                                <Link to={`${isUser === true ? '/cart' : '/loginMobile'}`} className="img-cart">
                                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                                    <span>{cart ? cart.length : 0}</span>
                                </Link>
                            </div>
                            <div className="page-container">
                                <div className="right-container" style={{ marginTop: 0 }}>
                                    <div className="order-tablist">
                                        <div className={`order-tab${defaultTab === true ?  '-active' : ''}`} onClick={() => { setDefaultTab(true); handleClickTab() }}>Tất cả đơn</div>
                                        { tabs.map((item, index) => (
                                            <div className={`order-tab${defaultTab === false && item.tab ? '-active' : ''}`} key={index} onClick={() => {changeTab(item.value); setDefaultTab(false); handleClickTab(item.value)}}>{item.name}</div>
                                        ))}
                                    </div>
                                    {/* <div className="order-search-input">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#808089" className="icon-left" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                                        <input className="search-input-bar" type='search' 
                                            value={input} onChange={(e) => setInput(e.target.value)} 
                                            placeholder="Tìm đơn hàng theo ID" 
                                            onKeyPress={event => {
                                            if(event.key === 'Enter') {
                                                handleSearch();
                                            }
                                        }}></input>
                                        <div className="search-input-right" onClick={handleSearch}>Tìm đơn hàng</div>
                                    </div> */}
                                    <div className="order-container">
                                        { defaultTab === true &&
                                            orderList.length > 0 && orderList.map((item, index) =>
                                                item.t_name === name &&
                                                <>
                                                    <div className="list-item" key={index}>
                                                        <div className="list-order">
                                                            <span>Đơn hàng số {item.id}</span>
                                                        </div>
                                                        {item.orders.map((item2, index) =>
                                                            viewMore === true ? (
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                    <span className="m_list-product-price">{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            ))
                                                            ) : ( index < 2 &&
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                    <span className="m_list-product-price">{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )
                                                        )}
                                                        {(item.orders.length -2) > 0 &&
                                                            viewMore === false ?
                                                            (
                                                                <>
                                                                    <div className='view-more'>
                                                                        Và {item.orders.length-2} sản phẩm...
                                                                    </div>
                                                                </>
                                                            ) : (<></>)}
                                                        <div className="list-total">
                                                            <span>Tổng tiền:</span> {item.t_total_money.toLocaleString()} ₫
                                                        </div>
                                                        <div className="group-btn-order">
                                                            <button className="btn-order" onClick={() => removeOrder(item.id)}>Xóa</button>
                                                            {/* <Link to=''><button className="btn-order">Mua lại</button></Link> */}
                                                            <Link to={`./orderdetail/id=${item.id}`}><button className="btn-order">Xem chi tiết</button></Link>
                                                        </div>
                                                        <div className="list-seperate"/>
                                                    </div>
                                                </>
                                            )
                                        
                                        }
                                        { defaultTab === false &&
                                            orderList.length > 0 && orderList.map((item, index) =>
                                                item.t_status == tabNum && item.t_name === name &&
                                                <>
                                                    <div className="list-item" key={index}>
                                                        <div className="list-order">
                                                            <span>Đơn hàng số {item.id}</span>
                                                        </div>
                                                        {item.orders.map((item2, index) =>
                                                            viewMore === true ? (
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                    <span className="m_list-product-price">{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            ))
                                                            ) : ( index < 2 &&
                                                                item2.products.map((item3, index) => (
                                                                    <div key={index}>
                                                                        <div className="list-product" >
                                                                            <div className="list-product-info">
                                                                                <img src={item3.pro_avatar} alt='z' width='100px' height='100px'/>
                                                                                <div className="list-product-name">
                                                                                    <span><Link to={`/${item3.pro_slug}-${item3.id}`} style={{color: 'black'}}>{item3.pro_name}</Link></span>
                                                                                    <span className="number">x{item2.od_qty}</span>
                                                                                    <span className="m_list-product-price">{(item2.od_price * item2.od_qty).toLocaleString()} ₫</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )
                                                        )}
                                                        {(item.orders.length -2) > 0 &&
                                                            viewMore === false ?
                                                            (
                                                                <>
                                                                    <div className='view-more'>
                                                                        Và {item.orders.length-2} sản phẩm...
                                                                    </div>
                                                                </>
                                                            ) : (<></>)}
                                                        <div className="list-total">
                                                            <span>Tổng tiền:</span> {item.t_total_money.toLocaleString()} ₫
                                                        </div>
                                                        <div className="group-btn-order">
                                                            <button className="btn-order" onClick={() => removeOrder(item.id)}>Xóa</button>
                                                            {/* <Link to=''><button className="btn-order">Mua lại</button></Link> */}
                                                            <Link to={`./orderdetail/id=${item.id}`}><button className="btn-order">Xem chi tiết</button></Link>
                                                        </div>
                                                        <div className="list-seperate"/>
                                                    </div>
                                                </>
                                            )
                                        }
                                    
                                    </div>
                                </div>
                            </div>
                            { isShow === true && (
                                <div className="alert-shopcart-mob">
                                    <div className="alert-container">
                                        <div className="alert-content">
                                            <div className="alert-content-message">
                                                Xóa thành công!
                                            </div>
                                        </div>
                                        <div className="alert-control">
                                            <div className="control-left" onClick={() => setIsShow(false)}>
                                                Đóng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )
                
            }
        </>
    )
}

export default OrderManagement;
