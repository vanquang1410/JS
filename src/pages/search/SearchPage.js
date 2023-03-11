import React, {useEffect, useState} from 'react';
import Products from './include/Products';
import productApi from '../../api/ProductService';

import {isWideScreen } from "../../helpers/screen";
import {Link, useNavigate, useParams, useSearchParams} from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import SidebarFilter from '../../components/common/sidebar/SidebarFinter';

function SearchPage() {

    let { searchInput } = useParams();
    const navigate = useNavigate();

    const [loadingProduct, setLoadingProduct] = useState(true);

    const [inputSearch, setInputSearch] = useState(searchInput)
    const [products, setProducts] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const [show, setShow] = useState(true);
    const [sortAsc, setSortAsc] = useState(false);
    const [sortDesc, setSortDesc] = useState(false);
    const [productsAsc, setProductsAsc] = useState([]);
    const [productsDesc, setProductsDesc] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const [arr] = useState([]);
    const [showMore, setShowMore] = useState(4);

    const page = 1;
    const page_size = 300;
    
    const getProducts = async () => {
        const response = await productApi.getListsProductsByPage(page, page_size)
        if(response.status === 200) {
            setProducts(response.data);
            setLoadingProduct(false);
        } 

    }

    const saveSearch = () => {
        arr.push({ name: inputSearch });
        console.log(arr);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getProducts();
        setShow(true);
        setSortAsc(false);
        setSortDesc(false);
    }, [searchInput]);

    const handleChangeSort = (event) => {
        let sortType = event.currentTarget.getAttribute('data-sort-type');
        let sortValue = event.currentTarget.getAttribute('data-sort-value');
        const elementLinks = [...document.querySelectorAll('.tabs-list')];

        elementLinks.map((tl) => {
            tl.classList.remove('active');
        });

        // event.currentTarget.classList.add("active");
        if (sortType === 'price') {
            let pramsPrice = { 'price': sortValue };
            setSearchParams({ ...pramsPrice })
            console.log('-------- sortValue', sortValue);
        }

        if (sortValue === 'asc') {
            handleSortAsc();
        } else if (sortValue === 'desc') {
            handleSortDesc();
        } else {
            event.currentTarget.classList.remove("active");
        }
    }

    const handleSortAsc = () => {
        const sortedArr = [...products].sort((a, b) => a.pro_price > b.pro_price ? 1 : -1);
        setProductsAsc(sortedArr);
        console.log('--Asc', productsAsc);
        setSortAsc(!sortAsc);
        setSortDesc(false);
        setShow(!show);
        if (sortDesc === true)
            setShow(false)
    }

    const handleSortDesc = () => {
        const sortedArr = [...products].sort((a, b) => a.pro_price > b.pro_price ? 1 : -1).reverse();
        setProductsDesc(sortedArr);
        console.log('--Desc', productsDesc);
        setSortAsc(false);
        setSortDesc(!sortDesc);
        setShow(!show)
        if (sortAsc === true)
            setShow(false)
    }

    return (
        <main className={isWideScreen() ? 'desktop' : 'mobile'}>
            {isWideScreen() &&
                <>
                    <div className="container">
                        <div className="category-title">
                            <Link to='/'>Trang chủ</Link>
                            <img alt="/" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo='></img>
                            <h4>{ searchInput || 'Chưa có dữ liệu' }</h4>
                        </div>
                        <div className="category-view">
                            <SidebarFilter />
                            <div className="category-right">
                                <div className="search-summary">
                                    <div className="title">
                                        <h1>Kết quả tìm kiếm cho `{ searchInput }`</h1>
                                    </div>

                                    {/*<div className="adv-slide">*/}
                                    {/*    <Swiper {...settingsSlide}>*/}
                                    {/*        {*/}
                                    {/*            adv.map((item,index) => {*/}
                                    {/*                return(*/}
                                    {/*                    <SwiperSlide key={index}>*/}
                                    {/*                        {<img alt="/" src={item.src}/>}*/}
                                    {/*                    </SwiperSlide>*/}
                                    {/*                )*/}
                                    {/*            })*/}
                                    {/*        }*/}
                                    {/*    </Swiper>*/}
                                    {/*</div>*/}

                                    { loadingProduct === true ? (
                                        <div className="product-container">
                                            <div className="suggestion__product">
                                                <div className="content">
                                                    <div className="" style={{ display:"flex", padding: "0 10px"}}>
                                                        <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                            <Skeleton height={100} />
                                                            <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                        </div>
                                                        <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                            <Skeleton height={100} />
                                                            <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Products 
                                                products={products} 
                                                searchInput={searchInput}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {!isWideScreen() &&
                <>
                    <div className="container">
                        <div className="mobile__header">
                            <div className="mobile__header--cate-logo">
                                <div onClick={() => {showSearch === true ? setShowSearch(false) : navigate(-1)}} className="left-header">
                                    <img alt='.' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"/>
                                </div>
                                <div className="mobile__header--cate-search" onClick={() => setShowSearch(true)}>
                                    <img
                                    src="https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png"
                                    height="24"
                                    width="24"
                                    alt="search"
                                    />
                                    <input
                                    className="w-100"
                                    type="text"
                                    placeholder="Bạn tìm gì hôm nay?"
                                    value={inputSearch}
                                    onChange={(e) => setInputSearch(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Link to="/cart" title="free-ship">
                                        <img
                                        src="https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png"
                                        alt="free"
                                        width="24"
                                        height="24"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="category-view">
                            <div className="category-right">
                                <div className="search-summary">
                                    { showSearch === false ?
                                        (<>
                                            <div className="search-summary-category">
                                                <div className="summary-top">
                                                    <div className="filter-icon">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.75 0.75C0.75 0.335786 1.08579 0 1.5 0H16.5C16.9142 0 17.25 0.335786 17.25 0.75V3C17.25 3.19891 17.171 3.38968 17.0303 3.53033L11.25 9.31066V15C11.25 15.2841 11.0895 15.5438 10.8354 15.6708L7.83541 17.1708C7.60292 17.2871 7.32681 17.2746 7.1057 17.138C6.88459 17.0013 6.75 16.7599 6.75 16.5V9.31066L0.96967 3.53033C0.829018 3.38968 0.75 3.19891 0.75 3V0.75ZM2.25 1.5V2.68934L8.03033 8.46967C8.17098 8.61032 8.25 8.80109 8.25 9V15.2865L9.75 14.5365V9C9.75 8.80109 9.82902 8.61032 9.96967 8.46967L15.75 2.68934V1.5H2.25Z" fill="#808089"></path></svg>
                                                        <span>Lọc</span>
                                                        <div style={{height: 24, width: 1, backgroundColor: '#efefef', marginLeft: 8,}}/>
                                                    </div>
                                                    <div className="top-tabs">
                                                        <div className="tabs-list">
                                                            <Link to={`${sortAsc === false ? `?price=asc` : '?'}`}
                                                                // {`?${searchParams}`}
                                                                onClick={handleChangeSort}
                                                                className={`tabs-list ${sortAsc === true ? 'active' : ''}`}
                                                                data-sort-type="price"
                                                                data-sort-value={"asc"}
                                                            >
                                                                Giá Thấp Đến Cao
                                                            </Link>
                                                            <Link to={`${sortDesc === false ? `?price=desc` : '?'}`}
                                                                // {`?${searchParams}`}
                                                                onClick={handleChangeSort}
                                                                className={`tabs-list ${sortDesc === true ? 'active' : ''}`}
                                                                data-sort-type="price"
                                                                data-sort-value={"desc"}
                                                            >
                                                                Giá Cao Đến Thấp
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>) : 
                                        (<div className="search-container">
                                            {inputSearch.length > 0 && (
                                                <Link
                                                    to={`/search&q=${inputSearch}`}
                                                    className="search-list"
                                                    onClick={() => {saveSearch(); setShowSearch(false)}}
                                                >
                                                    <img
                                                        src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                                                        alt="icon-search"
                                                        width='35'
                                                        height='35'
                                                    />
                                                    <p className='search-item'>{inputSearch}</p>
                                                </Link>
                                            )}
                                            {arr
                                                .filter((item) =>
                                                    item.name
                                                        .toLowerCase()
                                                        .match(inputSearch.toLowerCase())
                                                )
                                                .slice(0, 3)
                                                .map((item, index) => (
                                                    <Link
                                                        to={`/search&q=${item.name}`}
                                                        className="search-list"
                                                        key={index}
                                                        onClick={() => {saveSearch(); setShowSearch(false)}}
                                                    >
                                                        <img
                                                            src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png"
                                                            alt="icon-search"
                                                            width='35'
                                                            height='35'
                                                        />
                                                        <p>{item.name}</p>
                                                    </Link>
                                                ))}
                                            {products
                                                .filter((item) =>
                                                    item.pro_name
                                                        .toLowerCase()
                                                        .match(inputSearch.toLowerCase())
                                                )
                                                .slice(0, showMore)
                                                .map((item, index) => (
                                                    <Link
                                                        to={`${item.pro_slug}-${item.id}`}
                                                        className="search-list"
                                                        key={index}
                                                        onClick={() => {saveSearch(); setShowSearch(false)}}
                                                    >
                                                        <img
                                                            src={
                                                                item.pro_avatar
                                                            }
                                                            alt="icon-product"
                                                            width="35"
                                                            height="35"
                                                        />
                                                        <p>{item.pro_name}</p>
                                                    </Link>
                                                ))
                                            }
                                            { showMore <= 6 ?
                                                (<div className="search-list" style={{ justifyContent: 'center'}} onClick={() => setShowMore(8)}>
                                                <span style={{ color: 'blue' }}>Xem thêm</span>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0DdZzOaqWSYrbQKRLpUVqYtqmOig49fawwX3Hd8H3XmYchxtZbBIHeFyktUSMg6_Ul8&usqp=CAU" width='14' height='14' style ={{ color: 'blue', marginLeft: 10, marginTop: -2 }}/>
                                            </div>) :
                                                (<div className="search-list" style={{ justifyContent: 'center'}} onClick={() => setShowMore(4)}>
                                                <span style={{ color: 'blue' }}>Thu gọn</span>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0DdZzOaqWSYrbQKRLpUVqYtqmOig49fawwX3Hd8H3XmYchxtZbBIHeFyktUSMg6_Ul8&usqp=CAU" width='14' height='14' style ={{ color: 'blue', marginLeft: 10, marginTop: -2, transform: 'scaleX(-1)', transform: 'scaleY(-1)' }}/>
                                            </div>)
                                            }
                                            
                                        </div>)      
                                    }
                                    { showSearch === false &&
                                        loadingProduct === true && 
                                            <div className="product-container">
                                                <div className="suggestion__product">
                                                    <div className="content">
                                                        <div className="" style={{ display:"flex", padding: "0 10px"}}>
                                                            <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                                <Skeleton height={100} />
                                                                <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                                <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                                <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            </div>
                                                            <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                                <Skeleton height={100} />
                                                                <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                                <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                                <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                    { showSearch === false && loadingProduct === false &&
                                            <>
                                                <Products 
                                                    products={products} 
                                                    searchInput={searchInput}
                                                />
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </main>


    )
}

export default SearchPage;
