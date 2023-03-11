import { LeftOutlined, MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import BoxSearch from './BoxSearch';

export default function HomeSearchMobile(props) {
    return (
        <div className='search-mobile'>
            <header className='search-mobile--header'>
                <button className='back fs-21' onClick={() => props.setSearch(false)}>
                    <LeftOutlined />
                </button>
                <button className='menu fs-21'> <MenuOutlined /></button>
                <div className="mobile__header--search w-90">
                    <img src='https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png' height='24' width='24' alt='search' />
                    <input className='w-100' type='text' placeholder='Bạn tìm gì hôm nay?'/>
                </div>
                <button className='fs-21'>
                    <ShoppingCartOutlined />
                </button>
            </header>
            <BoxSearch/>
        </div>
    )

}
