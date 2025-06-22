import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { data } from './Context';

function LoggedInAuth(OriginalComponent) {
   function auth(){
        const navigate=useNavigate()
        const {isLogin}=data();
        useEffect(()=>{
            if(isLogin){
                navigate("/")
            }
        },[])
        return <OriginalComponent/>
    }
    return auth
}

export default LoggedInAuth
