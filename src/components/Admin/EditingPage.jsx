import React, { useContext, useEffect, useRef, useState } from 'react'
import Editor from './Editor'
import {  useNavigate } from 'react-router'
import { data } from '../Context'
import { v4 as uuidv4 } from 'uuid';
import AdminAuth from '../AdminAuth';

function EditingPage() {
    const navigate=useNavigate()
    const [blogDetail,setBlogDetail]=useState({title:"",img:""})
    const [showModal,setShowModal]=useState(false)
    const {blog,setBlog,setBlogs,blogs,currBlog,setCurrBlog,editIndex,setEditIndex,currentUser,setCurrentUser}=data();
    const onInput=(e,field)=>{
       
        if (editIndex>=0) {
            setCurrBlog({...currBlog,[field]:e.target.value,})
        }else{
            
        setBlog({...blog,[field]:e.target.value})
        }
    }

    useEffect(()=>{
        if (editIndex<0) {
         setBlog({...blog,id:uuidv4(),authorId:currentUser.id})
        }
        
    },[])

    const toggle=()=>{
        setShowModal(!showModal);
    }
    const onSubmit=()=>{
     
        if (editIndex>=0) {
            if(currBlog.title && currBlog.category){
            
                const updatedBlogs=blogs
                updatedBlogs.splice(editIndex,1,currBlog);
                setEditIndex(-1);
                setBlogs([...updatedBlogs])
                localStorage.setItem("Blogs",JSON.stringify([...updatedBlogs]))
                            navigate("/admin/blogs")
             } else{
                    alert("all fields required")
                }
            
        }else{
         if(blog?.title && blog?.category){
            setBlogs([...blogs,blog]);
            localStorage.setItem("Blogs",JSON.stringify([...blogs,blog]))
                navigate("/admin/blogs")
                toggle()
            
        
        }else{
            
            
            alert("all fields Required")
        }}
    }
    const onBtnClick=()=>{
            
            if (blog?.data || currBlog?.data) {
                toggle()
            }else{
                alert("no changes in Editor")
            }
    }
  return (
    <div className=' ' >
       <div className=' '>
      <Editor/>
       <div className=' flex justify-end  gap-5 mt-8 mr-16'
        ><button onClick={onBtnClick} className={"bg-stone-200 rounded-lg px-2 p-2 text-black transition delay-150 duration-300 hover:scale-110 active:scale-50"} >Submit</button>
        <button onClick={()=>navigate("/admin/blogs")}  className='bg-neutral-900 rounded-lg px-2 p-2 transition delay-150 duration-300 hover:scale-110 active:scale-50'>Discard changes</button>
        </div>
        </div>
    <div >
        


<div id="crud-modal" tabIndex="-1"  className={` ${!showModal && "hidden" }  backdrop-blur-md overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-neutral-800">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create new Blog
                </h3>
                <button onClick={toggle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div  className="p-4 md:p-5">
                <div  className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label  htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        {currBlog.data? (
                        <input defaultValue={currBlog.title}  onChange={(e)=>onInput(e,"title")} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter blog Title" required=""/>
                        
                        ):(
                        <input  onChange={(e)=>onInput(e,"title")} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter blog Title" required=""/>
                        
                        )}
                        
                    </div>
                    <div className='col-span-2 sm:col-span-2 w-full'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="category">Category</label>
                        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' onChange={(e)=>onInput(e,"category")} defaultValue={currBlog?.category || ""}   name="category" id="category">
                            <option disabled >select</option>
                            <option value="travel">travel</option>
                            <option value="fashion">fashion</option>
                            <option value="politics">politics</option>
                            <option value="sports">sports</option>
                            <option value="food">food</option>
                            <option value="music">music</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="col-span-2 sm:col-span-2 w-full">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tumbnail image</label>
                        {/* <input type="file" accept="image/*"
                         className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:dark:bg-neutral-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           />
            
                           <p className="flex justify-center">or</p> */}
                           {currBlog.data? (
                        <input defaultValue={currBlog.img} onChange={(e)=>onInput(e,"img")} type="text" placeholder='Enter image link'  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"'/>

                           ):(
                        <input onChange={(e)=>onInput(e,"img")} type="text" placeholder='Enter image link'  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"'/>

                           )}
                        
                    </div>
                    
                    
                </div>
                <button onClick={onSubmit} type="submit" className="text-white inline-flex items-center bg-neutral-700 hover:bg-neutral-800-800 focus:ring-4 focus:outline-none focus:ring-neutral-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-neutral-900 dark:focus:ring-neutral-900">                    Create new Blog
                </button>
            </div>
        </div>
    </div>
</div> 

    </div>

    </div>
  )
}

export default  AdminAuth( EditingPage)
