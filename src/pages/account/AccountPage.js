import React, { useEffect, useState } from "react";
import AccountInfo from "./include/AccountInfo";
import { isWideScreen } from "../../helpers/screen";
import AccountSetting from "./include/mobile/AccountSetting";

import { useTheme } from "../../components/utils/useTheme";
import LoginMobile from "../../components/login/LoginMobile";
import authApi from "../../api/AuthService";

function AccountPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        getUser();
    }, []); 

    const [user, setUser] = useState(false);

    const getUser = async () => {
        if (localStorage.getItem('accessToken')) {
            setUser(true);
        } else {
            setUser(false);
        }
    }
    

    const theme = useTheme();
    return (
        <>
            {isWideScreen() && (
                <div className="container">
                    <div className="page-container">
                        <AccountInfo />
                    </div>
                </div>
            )}

            {!isWideScreen() && 
                user === false ? (
                    <>
                        <LoginMobile/>
                    </>  
                ) : (
                    <>
                        <AccountSetting />
                    </>
                )
                
            }
        </>
    );
}

export default AccountPage;
