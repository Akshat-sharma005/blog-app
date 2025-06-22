import React, { useEffect } from 'react'
import Auth from '../Auth'
import { data } from '../Context'
import { useNavigate } from 'react-router'

function Profile() {
  const {currentUser}=data()
  const navigate=useNavigate()

  // useEffect(()=>{
  //   if (currentUser.identity=="admin") {
  //     navigate("/admin/profile")
  //   }
  // },[])
  return (
    <div className='w-full h-fit mx-4 grid col-1 justify-items-center' >
      <div className=' min-h-1/2 rounded-xl  bg-neutral-950 w-full sm:w-11/12 md:w-10/12 lg:w-8/12'>
          <div className='  grid grid-cols-4  ' >
          <div className='p-5 col-1 flex justify-center items-center ' >
            <div className='  bg-neutral-600  rounded-full flex justify-center items-center'>
            <img  className='mix-blend-overlay   z-10  rounded-full  overflow-hidden' src="https://th.bing.com/th/id/OIP.QnJGuu-yLfxE2Nf7B_FRRgAAAA?w=196&h=196&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" />
            </div>
            
          </div>
          <div className='col-span-3 p-6 flex flex-col justify-center gap-2 pl-16'>
              <p>
             Name :  {currentUser.name} {currentUser.surname}
              </p>
              <p>Email : {currentUser.email}</p>
              <p>
                Identity : {currentUser?.identity?.toUpperCase()}
              </p>
            </div>
          </div>
          </div>

    </div>
  )
}

export default Auth(Profile)
