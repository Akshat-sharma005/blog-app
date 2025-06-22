import React, { useEffect } from 'react'
import { data } from './Context'
import { useNavigate } from 'react-router'

function AdminAuth(OriginalComponent) {
    
    function adminAuth(){
        const {isLogin,currentUser}=data()
    const navigate=useNavigate();
    useEffect(()=>{
            if(!isLogin) {
                navigate("/login")
            }else if(currentUser.identity!="admin"){
                navigate("/")
                console.log("no access");
                
            }

    },[])

            return <OriginalComponent/>
    }
  return adminAuth
}

export default AdminAuth
