import React, { useEffect } from 'react'
import { data } from './Context'
import { useNavigate } from 'react-router';

function Auth(OriginalComponent) {

    function auth(){
        const navigate=useNavigate()
        const {isLogin,currentUser}=data();
        useEffect(()=>{
            if(!isLogin){
                navigate("/login")
            }else if(currentUser.identity=="admin"){
                console.log("no access");
                navigate("/")
                
                
            }
            
        },[])
        return <OriginalComponent/>
    }
  return auth
}

export default Auth
