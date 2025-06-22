import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import Context from './components/Context'
import Logout from './components/Logout'
import Profile from './components/Guest/Profile'
import ForgotPass from './components/ForgotPass'
import AdminProfile from './components/Admin/AdminProfile'
import Editor from './components/Admin/Editor'
// import Blogs from './components/Admin/Blogs'
import EditingPage from './components/Admin/EditingPage'
import Blog from './components/Guest/Blog'
import AdminBlogs from './components/Admin/AdminBlogs'
import Blogs from './components/Guest/Blogs'
import AdminBlog from './components/Admin/AdminBlog'
import Footer from './components/Footer'

function App() {
  return ( 
    <div className='ck-content min-h-lvh p-0 m-0 body text-emerald-50 bg-black  '>
      <Context>
      <Header>
        <Logout>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />

        <Route path='/login' element={<Login/>} />
          <Route path='/forgotPass' element={<ForgotPass/>}/>
        
        <Route path='/signup' element={<Signup/>} />
        <Route path='/admin/profile' element={<AdminProfile/>} />
        <Route path='/editor' element={<EditingPage/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/admin/blogs' element={<AdminBlogs/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/admin/blog/:id' element={<AdminBlog/>} />
       
      </Routes>
      </Logout>
      </Header>
      </Context>
     {/* <Footer/> */}
    </div>
  )
}

export default App
