// lib/authFunction.ts
// import { ApiPostNoAuth } from './api';
// import Cookies from 'universal-cookie';
// import { setUserInfo, setToken } from './storage'; // You can implement these functions
// import { showAlertPopupSuccess, showAlertPopupError } from './toast'; // Your toast handlers
// import { Add_Activity } from './activity'; // Log user activities

import { setToken } from "@/utils/auth.util";
import { ApiPostNoAuth } from "../api";
import { setUserInfo } from "@/utils/user.util";

interface LoginInfo {
    email: string;
    password: string;
}

export async function userSignIn(info: LoginInfo, showToast = true): Promise<any> {
    const oneDay = 24 * 60 * 60 * 1000;
    const thirtyDays = 30 * oneDay;
    const expirationDate = new Date(Date.now() + thirtyDays);
    try {
        const res = await ApiPostNoAuth('/userService/user/login', info);
        const user = res?.data?.data?.user;
        const token = res?.data?.data?.token;
        setUserInfo(user)
        setToken(token)
        if (showToast) {
            console.log("Login Sucessfull");
        }
        return res;
    } catch (error) {
        if (showToast) {
            console.log("Login Failed");

        }
        throw error;
    }
}
