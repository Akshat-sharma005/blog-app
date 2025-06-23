import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { data } from './Context';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
function GoogleLoginBtn() {
  const {loginDetails,setLoginDetails,currentUser,setCurrentUser,setIsLogin}=data();
  const [showModal,setShowModal]=useState(false);
  const [userDetails,setUserDetails]=useState({});
  const navigate=useNavigate()
  const onSucces=(response)=>{
       let userDetail= jwtDecode(response.credential)
       
       let  user=loginDetails.find((v)=>{
            return v.email==userDetail.email
        })
      if (user) {
        setIsLogin(true);
  sessionStorage.setItem("isLoggedIn" ,JSON.stringify(true))
        setCurrentUser({...user})
        sessionStorage.setItem("currUser",JSON.stringify(user));
        navigate("/");
      }else{
        const user={email:userDetail.email,name:userDetail.given_name,surname:userDetail.family_name,id:uuidv4(),loggedInBy:"google"}
        setUserDetails({...user});
        
        setShowModal(true);
      }
          
  }

  const toggle=()=>{
    setShowModal(false)
  }

  const onInput=(e)=>{
    setUserDetails({...userDetails,identity:e.target.value})
  }

const onSubmit=()=>{
  toggle();
  setIsLogin(true);
  sessionStorage.setItem("isLoggedIn" ,JSON.stringify(true))
   setCurrentUser({...userDetails})
        sessionStorage.setItem("currUser",JSON.stringify(userDetails));
        navigate("/");
    setLoginDetails([...loginDetails,userDetails]);
    localStorage.setItem("userDetails",JSON.stringify([...loginDetails,userDetails]))
}

  return (
    <>
    <div >

      <GoogleLogin 
      onSuccess={onSucces}
      onError={()=>console.log("error")
      }
      />
      </div>
       {showModal &&
      <div id="crud-modal" tabindex="-1"  className={` ${!showModal && "hidden" }  backdrop-blur-md overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
          <div className="absolute top-1/12 p-4 w-full max-w-md max-h-full ">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-neutral-800">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Register YourSelf
                      </h3>
                      <button  onClick={toggle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div  className="p-4 md:p-5">
                      <div  className="grid gap-4 mb-4 grid-cols-2">
                          <div className="col-span-2 flex flex-col gap-2 w-full">
                              <label htmlFor="identity"> Select Identity</label>
                              <select onChange={onInput} className='bg-neutral-700 rounded-lg p-2' name="identity" id="identity">
                                <option value="">Select</option>
                                <option value="admin">Admin</option>
                                <option value="guest">Guest</option>
                              </select>
                              <div className='mr-1 flex justify-end gap-3 mt-4'>
                                
                            <button const onClick={onSubmit} className='bg-neutral-200 rounded-lg p-1 px-2 text-black'>Submit</button>
                            <button  onClick={toggle} className='bg-neutral-900 rounded-lg p-1 px-2 text-white' >Cancel</button>
                          
                              </div>
                          </div>
                          
                          
                          
                      </div>
                      
                  </div>
              </div>
          </div>
      </div> }
    
    </>
  )
}

export default GoogleLoginBtn;
