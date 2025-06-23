import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
export const myContext=createContext();
function Context({children}) {
const [loginDetails,setLoginDetails]=useState(JSON.parse(localStorage.getItem("userDetails")) || [])
const [isLogin,setIsLogin]=useState( JSON.parse(sessionStorage.getItem("isLoggedIn")) || false)
const [currentUser,setCurrentUser]=useState( JSON.parse(sessionStorage.getItem("currUser")) ||{})
const [showToast,setShowToast]=useState(false)
const [newUser,setNewUser]=useState({name:"",surname:"",email:"",number:"",password:"",identity:"",category:""});
const [showHeader,setShowHeader]=useState(false);
const [blog,setBlog]=useState({data:"",likedBy:[],category:""})
const [currBlog,setCurrBlog]=useState( JSON.parse(sessionStorage.getItem("currBlog")) || {likedBy:[]})
const [blogs,setBlogs]=useState( JSON.parse(localStorage.getItem("Blogs")) || []);
const[editIndex,setEditIndex]=useState(-1);
const [showDeleteModal,setShowDeleteModal]=useState(false);
const [deleteId,setDeleteId]=useState(null)
const [category,setCategory]=useState("travel");

const [categorisedBlog,setCategorisedBlog]=useState([])

const navigate=useNavigate()


const onDelete=(id)=>{

    const newblogs=blogs.filter((v,i)=>{
            return id!=v.id
    })
    localStorage.setItem("Blogs",JSON.stringify(newblogs));
    setBlogs([...newblogs]);
    setDeleteId(null);
    setShowDeleteModal(false)
    navigate("/admin/blogs")
    
}
  return (
    <myContext.Provider  value={{categorisedBlog,setCategorisedBlog,category,setCategory,deleteId,setDeleteId,showDeleteModal,setShowDeleteModal, editIndex,setEditIndex,onDelete,currBlog,setCurrBlog,blog,setBlog,setBlogs,blogs,showHeader,setShowHeader,showToast,setShowToast,loginDetails,setLoginDetails,isLogin,setIsLogin,currentUser,setCurrentUser,newUser,setNewUser}}>
      {children}
    </myContext.Provider>
  )
}

export const data=()=>{
    return useContext(myContext);
}

export default Context
