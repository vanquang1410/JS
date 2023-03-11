import { DownOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { isWideScreen } from "../../helpers/screen";
import Images from "../Image/Images";
import { Link } from "react-router-dom";
import productApi from '../../api/ProductService';

export default function BoxSearch(props) {

    const arr = Array.from(Array(6).keys());

    
    return (
        
            {/* <div className="search-style">
                <div className="search-popular">
                    <div className="wrapper-header">
                        <Images src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" alt="header"/>
                        <p>Tìm kiếm phổ biến</p>
                    </div>
                    <div className="popular-list">
                    { arr.map((item,key) => {
                        return (
                            <a href="/" key={key}>
                                <Images src="https://salt.tikicdn.com/cache/280x280/ts/product/0b/8f/f4/b61f2ed6312cbd30beb014531b7afdd1.jpg" alt="gel"/>
                                <span>Gell</span>
                            </a>
                        );
                    })}
                    </div>
                </div>
                <div className="search-category">
                    <div className="wrapper-header">
                        <p>Danh mục nổi bật</p>
                    </div>
                    <div className="category-list">
                        {arr.map((item,key) => {
                            return (
                                <a href="/" key={key}>
                                    <Images src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png" alt="gấu"/>
                                    <span>Đồ chơi</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>     */}
    );
}