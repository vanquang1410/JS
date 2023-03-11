import { CommentOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import Images from '../Image/Images'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MenuMobile() {

    const [menu, setMenu] = useState();

    const changeMenu = (number) => {
        setMenu(number);
    }
    return (
        <div className="menu__mobile">
            <Link to='/' className="tab">
                <div className={menu === 1?'active':''} onClick={() => changeMenu(1)}>
                    <Images src={menu === 1?"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-home.png":"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/home.png"} alt="Home"/>
                    <span className='fs-10' >Trang Chủ</span>
                </div>
            </Link>
            {/* <div className={props.menu === 2 ?'active':''} onClick={() => changeMenu(2)}>
                <Images src={props.menu === 2?"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-cate.png":"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/cate.png"} alt="Danh muc"/>
                <span className='fs-10'>Danh mục</span>
            </div>
            <div  className={props.menu === 3?'active':''} onClick={() => changeMenu(3)}>
            <FireOutlined style={{color:props.menu === 3?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Lướt</span>
            </div> */}
            {/* <div  className={props.menu === 4?'active':''} onClick={() => changeMenu(4)}>
                <CommentOutlined style={{color:props.menu === 4?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Chat</span>
            </div> */}
            
            <Link to='/account' className='tab'>
                <div className={menu === 2?'active':''} onClick={() =>  changeMenu(2)}>
                    <UserOutlined style={{color:menu === 2?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                    <span className='fs-10'>Cá nhân</span>
                </div>
            </Link>
            
        </div>
    )
}

export default MenuMobile
