import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { data } from './Context'
import { v4 as uuidv4 } from 'uuid';
import { hashPassword } from './Encrypt';
import LoggedInAuth from './LoggedInAuth';
import GoogleLoginBtn from './GoogleLoginBtn';

function Signup() {
    const navigate=useNavigate();
    const {newUser,setNewUser,setLoginDetails,loginDetails}=data();
    const [confirmPass,setConfirmPass]=useState();
    const [isPassSame,setISPassSame]=useState(true);
    const [password,setPassword]=useState();
    useEffect(()=>{
        setNewUser({...newUser,id:uuidv4()})
    },[])

    const oninput=async(e,field)=>{

        setNewUser({...newUser,[field]:e.target.value})
        
        if (field=="password") {
           const pass= await hashPassword(e.target.value)
         setNewUser({...newUser,[field]:pass})
         setPassword(e.target.value);
          
        }
    }

    const onSubmit=()=>{
        const {name,surname,email,number,identity}=newUser
        const exsistingUser=loginDetails.filter((v)=>{
            return v.email==email
        })
        if(exsistingUser.length){
            alert("email already exists")
        }else if(!email.includes("@")){
            alert("wrong Email")
        }else if(password.length<8){
            alert("password must be of Atleast 8 characters")
        }
        else{

            if (name && surname && email && number && identity) {
                if (isPassSame && confirmPass==password) {
                     const allDetails=[...loginDetails,newUser]
                localStorage.setItem("userDetails",JSON.stringify(allDetails));
                setLoginDetails((prev)=>[...prev,newUser]);
                setNewUser({});                
                navigate("/login",{replace:true});
                }else{
                    alert("password and confirm password did not match")
                }
                
            }else{
                alert("all fiels are required")
            }

        }
    }
   

    const confirmPassword=(e)=>{
            setConfirmPass(e.target.value)
        // const pass=newUser?.password
            if(password.startsWith(e.target.value)){
                setISPassSame(true)
            }else{
                setISPassSame(false);
            }
    }
  return (
     <div className='flex items-start  justify-center text-emerald-50 h-screen w-screen  translate-y-1/12'>
      <div className='sm:xxl  md:w-xl  md:max-w-3/5 ml-2 mr-2  bg-neutral-900 rounded-2xl p-8 py-5 flex flex-col gap-4   '>

        <div>
            <h3>Register / Sign up</h3>
            <p className='text-neutral-500'>Enter your details to register yourself</p>
        </div >
        <div className='flex flex-col gap-4' >
        <div className='flex w-full justify-between '>
            <div className='flex flex-col w-5/11'>
            <label htmlFor="name">First Name</label>
            <input onChange={(e)=>oninput(e,"name")} placeholder='Enter first Name'  type="text " id='name' className='bg-neutral-800 border-1 border-neutral-500 rounded-lg p-1 w-full autofill:bg-none'/>
            </div>
            <div className='flex flex-col w-5/11'>
            <label htmlFor="surname">Last Name</label>
            <input onChange={(e)=>oninput(e,"surname")} placeholder='Enter last Name' type="text " id='surname' className='bg-neutral-800 border-1 border-neutral-500 rounded-lg p-1 w-full autofill:bg-none' />
            </div>
        </div>
        <div>
           
            <label htmlFor="email">Email</label>
            <input id='email' onChange={(e)=>oninput(e,"email")} placeholder='Abc1@ex.com' type="email" className='bg-neutral-800 border-1 rounded-lg border-neutral-500 p-1 w-full autofill:bg-none' />
        </div>

        <div className=''>
        <label htmlFor="identity">Identity</label>
        <select onChange={(e)=>oninput(e,"identity")} name="identity" id="identity" className='bg-neutral-800 border-1 rounded-lg border-neutral-500 p-1 w-full autofill:bg-none'>
            <option disabled selected >Select</option>
            <option  value="admin">Admin</option>
            <option value="guest">Guest</option>
        </select>
        </div>
        <div>
            <label htmlFor="number">Phone no.</label>
            <br />
            <input id='number' onChange={(e)=>oninput(e,"number")} placeholder='Phone no.' type="text" className='bg-neutral-800 border-1 rounded-lg border-neutral-500 p-1 w-full autofill:bg-none' />
        </div>
        <div>
            <label htmlFor="password">Create Password</label>
            <br />
            <input id='password' onChange={(e)=>oninput(e,"password")} placeholder='password' type="password" className='bg-neutral-800 border-1 rounded-lg border-neutral-500 p-1 w-full autofill:bg-none' />
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input id='confirmPassword' onChange={confirmPassword} placeholder='confirm password' type="password" className={`bg-neutral-800 border-1 rounded-lg border-neutral-500 p-1 w-full autofill:bg-none   ${!isPassSame && "border-red-500 outline-0 text-red-600"} `} />
        </div>
    
        </div>
        <div className='mt-2 flex flex-col items-center gap-2'>
        <button onClick={onSubmit} className='bg-emerald-50 text-neutral-900 rounded-lg w-full h-8 active:scale-95'>Sign up</button>
        <GoogleLoginBtn/>
        <p>Already have account? <Link className='border-b-1 ' to={"/login"}> Login</Link></p>
         {!isPassSame && <p>wrong pass</p>}
    </div>
        
        </div>
    </div>
  )
}

export default LoggedInAuth( Signup)
