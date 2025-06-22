import React, { useEffect, useState } from 'react'
import { data } from '../Context'
import Auth from '../Auth';
import { useNavigate } from 'react-router';
import AdminAuth from '../AdminAuth';

function AdminProfile() {
    const navigate=useNavigate()
    const {currentUser,blogs,}=data();
  const [userBlogs,setUserBlogs]=useState([]);

   useEffect(()=>{
   const  UBlogs= blogs.filter((v)=>{
    return v.authorId==currentUser.id
   })

   setUserBlogs([...UBlogs])
},[blogs,currentUser])

const onBlogClick=(id)=>{
  navigate(`/admin/blog/${id}`)
}

const images=  [
          "https://img.freepik.com/free-photo/sunset-background-pastel-sky_53876-129041.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148910071.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-photo/blue-purple-marble-background_53876-104406.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-vector/watercolor-pastel-sky-background_23-2148898823.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60363.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-photo/business-wood-space-break-keyboard_1220-998.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-photo/hand-planning-blank-paper_53876-146180.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-photo/remote-office-3d-rendering-concept-illustration_23-2151876129.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-photo/sylvan-environment-forest-eco-word_53876-120802.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-photo/flat-lay-work-space-with-coffee-cup-keyboard_23-2148397861.jpg?ga=GA1.1.980289495.1726426400&semt=ais_hybrid&w=740",
          "https://img.freepik.com/free-photo/electronic-device-surrounded-by-nature_23-2150039936.jpg?ga=GA1.1.980289495.1726426400&w=740",
          "https://img.freepik.com/premium-photo/desk-with-lamp-standing-computer-monitor-with-broadcast-from-cameras_236854-58397.jpg?ga=GA1.1.980289495.1726426400&w=740",
          "https://img.freepik.com/premium-photo/workstation-by-window_53876-1425.jpg?ga=GA1.1.980289495.1726426400&w=740"
];
  return (
    <div className='w-full h-fit mx-4 grid col-1 justify-items-center'>
        <div className=' min-h-1/2 rounded-xl  bg-neutral-950 w-full sm:w-11/12 md:w-10/12 lg:w-8/12'>
          <div className='   border-b-2 border-b-neutral-500 grid grid-cols-4  ' >
          <div className='p-5 col-1 flex justify-center items-center ' >
            <div className='  bg-neutral-600  rounded-full flex justify-center items-center'>
            <img  className='mix-blend-overlay   z-10  rounded-full  overflow-hidden' src="https://th.bing.com/th/id/OIP.QnJGuu-yLfxE2Nf7B_FRRgAAAA?w=196&h=196&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" />
            </div>
            
          </div>
          <div className='col-span-3 p-6'>
              <p>
             Name :  {currentUser.name} {currentUser.surname}
              </p>
              <p>Email : {currentUser.email}</p>
              <p>
                Identity : {currentUser.identity.toUpperCase()}
              </p>
            </div>
          </div>
          <div className='min-h-50 bg-neutral-950 p-2'>
            {
              <div  className='grid grid-cols-2 gap-3 sm:grid-cols-3 w-full p-2' >
        {userBlogs.map((v,i)=>{
         return  <div key={v.id} style={{backgroundImage:`url(${images[Math.floor(Math.random()*13)]})`}} onClick={()=>onBlogClick(v.id)} className={`${(i+1)%3==0 && "md:col-span-2 md:min-h-80  md:row-span-4 "} bg-blend-normal   bg-cover bg-center bg-neutral-800 rounded-xl md: min-h-40 overflow-hidden flex items-end `}>
         <p className='bg-neutral-900 opacity-80  font-mono w-full text-center'>{v.title}</p> </div>
        })}
      </div>
            }

          </div>
       
        </div>
    </div>
  )
}

export default AdminAuth (AdminProfile)
