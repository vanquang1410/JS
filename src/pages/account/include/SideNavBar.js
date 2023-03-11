import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../fontawesome';
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {BASE_URL} from '../../../components/utils/useTheme';

function SideNavBar() {

    const [name, setName] = useState("");

    async function getUser() {
        fetch(`${BASE_URL}/auth/profile`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('accessToken'),
            }
        }).then((result) => {
            result.json().then((res) => {
                setName(res.data.name);
            })
        });
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <div className="left-container">
                <div className="account-avatar">
                    <img src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" alt="avatar"/>
                    <div className="account-info">
                        Tài khoản của
                        <strong>{name}</strong>
                    </div>
                </div>
            <div className="category-list-item">
                {/* {links.map(link => {
                    return ( */}
                        {/* <div key={link.id}> */}
                            {/* <ul>
                                <Link to='/info'>
                                    <li
                                    onClick={() => this.handleClick(links.id)}
                                    className={
                                        (link.id === activeLink ? "is-active" : "no-active")
                                    }
                                    >
                                        <FontAwesomeIcon className="iimg" icon={faUser} />
                                        {link.name}
                                        {link.id}
                                    </li>
                                </Link>
                            </ul> */}
                        <div>
                            <ul>
                                <Link to='/info'>
                                    <li>
                                        <FontAwesomeIcon className="iimg" icon={faUser} />
                                        <div className="li-text">Thông tin của tôi</div>
                                    </li>
                                </Link>
                            </ul>
                            <ul>
                                <Link to='/order'>
                                    <li>
                                        <FontAwesomeIcon className="iimg" icon={faShoppingCart} />
                                        <div className="li-text">Quản lý đơn hàng</div>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    {/* );
                })} */}
            </div>
            </div>
        </>
    );
}

export default SideNavBar;
