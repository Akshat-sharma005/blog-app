import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'


import parse from "html-react-parser";
import { data } from '../Context';
import AdminAuth from '../AdminAuth';
import DeleteModal from './DeleteModal';

function AdminBlog() {
    const navigate=useNavigate()
  const {blogs,currBlog,setCurrBlog,onDelete,setShowDeleteModal,setDeleteId}=data()
  const [blog,setBlog]=useState({});
    const params=useParams()
    const paramId=params.id

    useEffect(()=>{
      const Blog=blogs.filter((v)=>{
          return v.id==paramId;
         
      })
      
       setCurrBlog(Blog[0])
       setBlog(Blog[0]);
       
       sessionStorage.setItem("currBlog",JSON.stringify(Blog[0]))
    },[])    
    
    const onDeleteBlog=()=>{        
        // navigate("/admin/blogs")
        setShowDeleteModal(true)
        // onDelete(paramId)
        setDeleteId(paramId);
        
    }
    const onEdit=()=>{
        navigate("/editor")
    }

  return (
    <div className='ck-content w-screen h-fit  mt-5  '>
        <div className='flex gap-4 justify-end mx-16 m-8'>
            <button onClick={onEdit} className='p-2 px-4 bg-emerald-50  text-black rounded-xl hover:bg-neutral-300 transition delay-150  active:scale-90 '>Edit</button>
            <button onClick={onDeleteBlog} className='p-2 px-4 rounded-xl text-emerald-50 hover:bg-neutral-900 transition delay-150 active:scale-90' >Delete</button>
        </div>
        <div className='flex justify-center'>
      <div className='w-4xl h-auto mr-8 max-w-4xl bg-neutral-950 rounded-2xl p-8'>
        
   { blog.data && parse(blog?.data)}
</div>
</div>
<DeleteModal/>
    </div>
  )
}

export default AdminAuth( AdminBlog)
