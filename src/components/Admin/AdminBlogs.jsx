import React, { useState } from 'react'
import { data } from '../Context'
import parse from "html-react-parser";
import { useNavigate } from 'react-router';
import AdminAuth from '../AdminAuth';
import DeleteModal from './DeleteModal';
function AdminBlogs() {
  const navigate=useNavigate()
//   const [deleteIndex,setDeleteIndex]=useState(null);

    const {blogs,setBlogs,onDelete,setEditIndex,setCurrBlog,deleteId,setDeleteId,setShowDeleteModal,currentUser}=data()
  const onBlogClick=(id,i)=>{
    navigate(`/admin/blog/${id}`);
    setEditIndex(i);

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

const onDeleteBlog=(e,id)=>{
        e.stopPropagation();
      setDeleteId(id);
      setShowDeleteModal(true)
}
const onAddNewTask=()=>{
    sessionStorage.removeItem("currBlog")
    setCurrBlog({});
    navigate("/editor")
    setEditIndex(-1);

}
const onLike=(e,id,i)=>{
  e.preventDefault()
  e.stopPropagation()
    const updateBlogs=blogs.map((blog)=>{
        if (blog.id==id) {
          const likedBy=blog.likedBy? [...blog.likedBy] :[]
          const index=likedBy.indexOf(currentUser.email)
          if (index>=0) {
            likedBy.splice(index,1)
          }else{
            likedBy.push(currentUser.email)
          }
          return {...blog,likedBy}
        }return blog
    })
        
        localStorage.setItem("Blogs",JSON.stringify(updateBlogs));
        setBlogs([...updateBlogs]);
}

  return (
    <>
    <div>
        <div className='flex justify-end items-center m-8'>
            <button onClick={()=>onAddNewTask()} className='p-2 px-4 bg-emerald-50  text-black rounded-lg hover:bg-neutral-300 transition delay-150  active:scale-90 '>Add new Blog</button>
        </div>
    <div className='ck-content md:m-12 m-4 md:p-8 p-2  flex justify-center '>
     { blogs.length>0 && <div  className='grid md:grid-cols-4 grid-cols-1 gap-4 w-5xl' >
        {blogs?.map((v,i)=>{
         return  <div key={v.id} style={ v.img? {backgroundImage:`url(${v.img})`} : {backgroundImage:`url(${images[Math.floor(Math.random()*13)]})`}} onClick={()=>onBlogClick(v.id,i)} className={`${(i+1)%3==0 && "md:col-span-2 md:min-h-80  md:row-span-4 "} bg-blend-normal   bg-cover bg-center bg-neutral-800 rounded-xl md: min-h-40 overflow-hidden flex flex-col justify-between `}>
            <span className="flex justify-end p-2"><i onClick={(e)=>onDeleteBlog(e,v.id)} className="fa-solid fa-trash bg-neutral-900 opacity-50 text-white p-2 rounded-xl hover:opacity-95 active:scale-90"></i></span>
         <p className= 'px-1 flex items-center justify-between bg-neutral-900 opacity-80  font-mono w-full text-center'>{v.title} <span className='flex items-center gap-1'><i onClick={(e)=>onLike(e,v.id,i)} className={`fa-solid fa-heart  ${
          v.likedBy?.includes(currentUser.email) && "text-red-600" 
         } `}></i><span className='text-emerald-50'>{v.likedBy && v.likedBy.length} </span>  </span></p>  </div>
        })}
        
      </div>}
      {blogs.length<=0 && 
          <div className=''>
            <p className='text-3xl font-serif'>Create Your First Blog </p>
            
          </div>
        }
    </div>
    </div>
    <DeleteModal/>
       </>
  )
}

export default AdminAuth( AdminBlogs)
