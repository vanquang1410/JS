import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../../../api/AuthService';
import { useSelector } from 'react-redux';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailHeader() {

    const cart = useSelector((state) => state.cartReduce.listCart);

    const navigate = useNavigate();
    const [user, setUser] = useState(false);
    const getUser = async () => {
        const response = await authApi.getProfile();
        if (response.status === 200) 
            setUser(true);
        else 
            setUser(false);
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div className="m_detail-header">
            <div className="m_d-inner-top">
                <div className="left-header">
                    <img onClick={() => navigate(-1)}  alt='.' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"/>
                    <FontAwesomeIcon onClick={() => navigate('/')}  icon={faHome} style={{ color: 'white', width: 20, height: 20, marginLeft: 5 }}/>
                </div>
                <Link to={`${ user === true ? '/cart' : '/loginMobile'}`}>
                    <div className="right-header">
                        <div className="img-cart1">
                            <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                        </div>
                        <span>{cart ? cart.length : 0}</span>
                    </div>
                    
                </Link>
            </div>
        </div>
    )
}

export default DetailHeader;