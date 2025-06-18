// lib/authFunction.ts
// import { ApiPostNoAuth } from './api';
// import Cookies from 'universal-cookie';
// import { setUserInfo, setToken } from './storage'; // You can implement these functions
// import { showAlertPopupSuccess, showAlertPopupError } from './toast'; // Your toast handlers
// import { Add_Activity } from './activity'; // Log user activities

import { setToken } from "@/utils/auth.util";
import { ApiPostNoAuth } from "../api";
import { setUserInfo } from "@/utils/user.util";
import Cookies from 'js-cookie';
interface LoginInfo {
    email: string;
    password: string;
    role: string
}
// Fix SignUpInfo interface
export interface SignUpInfo {
    parentFirstName: string;
    parentLastName: string;
    parentEmail: string;
    parentPhone: string;
    parentPassword: string;
    parentConfirmPassword: string;
    students: {
        studentFirstName: string;
        studentLastName: string;
        studentEmail: string;
        syllabus: string;
        studentGrade: string;
        studentPassword: string;
        isAboveSchool: boolean;
    }[];
}


export async function userSignIn(info: LoginInfo, showToast = true): Promise<any> {
    const oneDay = 24 * 60 * 60 * 1000;
    const thirtyDays = 30 * oneDay;
    const expirationDate = new Date(Date.now() + thirtyDays);
    try {
        const res = await ApiPostNoAuth('/userService/user/login', info);
        const user = res?.data?.data?.user;
        const token = res?.data?.data?.token;
        const role = user?.role?.name;
        setUserInfo(user)
        setToken(token)
        Cookies.set('token', token, { expires: 30 }); // expires in 30 days
        Cookies.set('role', role, { expires: 30 });
        if (res?.data?.data?.user?.role?.name == 'superadmin') {
            window.location.href = '/superadmin/dashboard';
        } else {
            window.location.href = '/quiz';
        }
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
export function userSingUp(info: SignUpInfo, showToast = true): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await ApiPostNoAuth('/userService/user/parent-register', info);
            resolve(res);
        } catch (error) {
            console.error('Signup error', error);
            reject(error);
        }
    });
}
