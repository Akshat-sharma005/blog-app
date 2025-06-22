import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { data } from '../Context';
// import Blogs from './Admin/Blogs';/
import parse from "html-react-parser";
import Auth from '../Auth';

function Blog() {
  const {blogs,currBlog,setCurrBlog}=data()
    const params=useParams()
    const paramId=params.id

    useEffect(()=>{
      const Blog=blogs.filter((v)=>{
          return v.id==paramId;
         
      })
       setCurrBlog(Blog[0])
    },[])
   
    
    
  return (
    <div className=' ck-content w-screen h-screen flex justify-center mt-5 '>
      <div className='w-4xl mx-4 bg-neutral-950 rounded-2xl p-8 '>
   {parse(currBlog.data)}
</div>
    </div>
  )
}

export default Auth ( Blog)
