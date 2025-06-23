import React, { useEffect, useState } from 'react'
import { data } from './Context';
import { Navigate, useAsyncError, useNavigate } from 'react-router';
import { hashPassword } from './Encrypt';
import LoggedInAuth from './LoggedInAuth';

function ForgotPass() {
    const {loginDetails,setLoginDetails}=data();
    const [email,setEmail]=useState("");
    const [isExist,setISExist]=useState(false);
    const [userData,setUserData]=useState({});
    const [passwords, setPasswords]=useState({});
    const [loader,setLoader]=useState(false);
    const [isPassSame,setIsPassSame]=useState(true);
    const [index,setIndex]=useState()
    const navigate=useNavigate();

    
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        },1500)
    },[isExist]);
    const onInput=(e)=>{
         setEmail(e.target.value)
    }
    const onSubmit=()=>{
        if (email) {
            const user=loginDetails.filter((v,i)=>{
                if (email==v.email) {
                      setIndex(i);
                }
            return email==v.email
        })
        if(user[0]?.email){
            setISExist(true);
            setUserData({...user[0]})
            setLoader(true);
        }else{
            alert("No matching email found please Signup first")
        }
        }else{
            alert("please enter email first")
        }
        
        
        
    }

    const onPasswordInput=(e,field)=>{
        setPasswords({...passwords,[field]:e.target.value})
        if (field=="confirmPassword") {
            if (passwords.password.startsWith(e.target.value)) {
                setIsPassSame(true);
            }else{
                setIsPassSame(false)
            }
        }
    }

    const onChangePassword=async()=>{
        if(passwords.password.length<8){
            
            alert("Password's length must be of atleast 8 characters ")
        }else if (isPassSame && passwords.password==passwords.confirmPassword) {
                userData.password= await hashPassword(passwords.password);
                const allDetails=[...loginDetails];
                allDetails.splice(index,1,userData)
                setLoginDetails([...allDetails]);
                navigate("/login",{replace:true})
                setISExist(false)
                alert("Password changed succesfully")
                
        }else{
            alert("passwords did not match")
        }
    }

  return (
    <>
      
    <div className={`flex items-start justify-center text-emerald-50 h-screen w-screen
         translate-y-2/12 `}>
      <div className='sm:xxl  md:w-xl  md:max-w-3/5 ml-2 mr-2 bg-neutral-900 rounded-2xl p-8 py-5 flex flex-col gap-4  '>
            <div>
                <h2 className='text-lg'>Forgot Password</h2>
                <p className='text-sm text-neutral-500' >Enter your email to recover your password</p>
            </div>

            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onChange={(e)=>onInput(e)} placeholder='Enter your email' type="email" id='email' className=' bg-neutral-800 border-1 border-neutral-600 rounded-lg px-2 w-full h-9 invalid:border-red-600' />
                </div>
                { isExist? (<>
                        <div>
            <label htmlFor="password">Create Password</label>
            <br />
            <input id='password' onChange={(e)=>onPasswordInput(e,"password")}  placeholder='password' type="password" className='bg-neutral-800 border-1 rounded-lg border-neutral-500 p-1 w-full autofill:bg-none' />
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input  onChange={(e)=>onPasswordInput(e,"confirmPassword")} id='confirmPassword'  placeholder='confirm password' type="password" className={`bg-neutral-800 border-1 rounded-lg border-neutral-500 p-1 w-full autofill:bg-none  ${!isPassSame && "border-red-500 outline-0"}  `} />
            <button onClick={onChangePassword} className='bg-neutral-700 p-1 rounded-xl w-full mt-4'>Change Password</button>
        </div>
                         </>):
                <button onClick={onSubmit} className='bg-neutral-700 p-1 rounded-xl ' > Verify Email</button>}
            </div>
            
      </div>
    </div>
    { loader &&
<div className='absolute m-0 p-0 top-0 left-0 w-screen h-screen bg-neutral-800 opacity-80'>
    <div className=' absolute top-2/5 left-1/2 w-15 h-15 border-l-4 rounded-4xl animate-spin border-amber-300 z-10 '>
            </div>
            </div>}
            </>
  )
}

export default LoggedInAuth( ForgotPass)
