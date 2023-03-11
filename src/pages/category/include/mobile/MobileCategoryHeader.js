import React from 'react';
import { Link } from 'react-router-dom';

function MobileCategoryHeader() {
    return(
        <div className="m_cateheader">
            <div className="m_inner-top">
                <Link to="/" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>    
                    </button>    
                </Link>       
                <button className="hamberger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <form className="header-search">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    <input type="search" placeholder='Bạn đang tìm kiếm gì?' className="header-search-input"/>
                </form>
                <Link to="/" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                </Link>
            </div>
        </div>
    )

}

export default MobileCategoryHeader;