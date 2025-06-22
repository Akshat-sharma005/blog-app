import React, { useEffect, useState } from 'react'
import { data } from './Context'
import Footer from './Footer';
import GoogleLoginBtn from './GoogleLoginBtn';
import { useNavigate } from 'react-router';

function Home() {
   const navigate=useNavigate();
 

  const {isLogin,currentUser,blogs,category,setCategory ,categorisedBlog,setCategorisedBlog}=data();
  
   const changeCategory=(field)=>{
    setCategory(field);
  }

useEffect(()=>{
  const CategoryWiseBlogs=blogs.filter((v,i)=>{
    return v.category==category
  })

  
   setCategorisedBlog([...CategoryWiseBlogs])
},[category,blogs])



const onBlogClick=(id)=>{
  if (currentUser.identity=="admin") {
    navigate(`/admin/blog/${id}`)
  }else{
    navigate(`/blog/${id}`)    
  }
}
  return (
        <div className='home w-screen flex items-start flex-col pb-10  text-emerald-50 h-lvh pt-8 '>
            <div  className='w-full mx-4 flex justify-center'>
                {isLogin==true ? (
                  <div  className='w-full mx-4 grid col-1 justify-items-center'>
                  <div className='w-full sm:w-11/12 md:w-10/12 lg:w-8/12 '>
                  <div className=' w-full h-40 sm:h-50 md:h-60 lg:h-70 p-8  bg-neutral-800 rounded-xl grid grid-cols-2 '>
                    <div className='flex justify-center items-center col-span-1 '>
                    <img src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"  className="w-7/10 xl:w-6/10 mb-2 h-auto rounded-lg  " alt="" />
                    </div>
                    <div className='flex justify-center items-center text-sm sm:text-md md:text-2xl '>
                      "Read. Learn. Grow."
                      <br />
Articles worth your scroll — straight from my mind to your screen.
                    </div>
                  </div>
                  <div>
                    <div className='mt-8  m-2'>
                      <div>
                      <h3>Latest Blogs</h3>
                      <div className=' bg-neutral-950 latest h-40  mt-2 sm:h-50  rounded-3xl overflow-scroll px-1 flex flex-col flex-wrap '>
                           {blogs.length>0 ? blogs.slice(0,5)?.map((v,i)=>{
                                return <div key={i} onClick={()=>onBlogClick(v.id)} className='m-1.5 bg-neutral-800 h-11/12 w-3/5 sm:w-3/5 rounded-2xl grid grid-cols-2 p-4' >
                                  <div className=' flex items-center h-full rounded-lg overflow-hidden'>
                            <img src={v.img? v.img : "https://th.bing.com/th/id/OIP.Zsmdp9QPUYVvsOE5ENWPzgHaE7?w=224&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"}  className="w-4/5 rounded-xl overflow-hidden " alt="thumbnail" />
                            
                                  </div>
                                  <div className='flex items-center ' >{v.title}</div>
                                </div>
                            }): <p className='w-full h-full flex justify-center items-center bg-neutral-950' >No Blogs</p> }
                            { blogs.length>4 && <div className='m-1.5 h-11/12 w-1/10 flex justify-center items-center '>
                              <span className='w-11/12 h-2/9 rounded-xl text-xl bg-neutral-300 text-black flex items-center  justify-center '>
                              <br />
                              <i class="fa-solid fa-arrow-right"></i>
                              </span>
                            </div>}
                      </div>
                      </div>
                      <div className="mt-4">
                        <h3 className='m-2'>Categories</h3>
                        <div className='w-full flex gap-2  flex-wrap'>
                          <span onClick={()=>changeCategory("tarvel")} className='categoryBtn bg-neutral-800 rounded-lg px-2 hover:bg-neutral-700 active:scale-95  '>Travel </span>
                          <span onClick={()=>changeCategory("fashion")} className='categoryBtn bg-neutral-800 rounded-lg px-2 hover:bg-neutral-700 active:scale-95'>Fashion </span>
                          <span onClick={()=>changeCategory("politics")} className='categoryBtn bg-neutral-800 rounded-lg px-2 hover:bg-neutral-700 active:scale-95'>Politics </span>
                          <span onClick={()=>changeCategory("sports")} className='categoryBtn bg-neutral-800 rounded-lg px-2 hover:bg-neutral-700 active:scale-95'>Sports </span>
                          <span onClick={()=>changeCategory("food")} className='categoryBtn bg-neutral-800 rounded-lg px-2 hover:bg-neutral-700 active:scale-95'>Food </span>
                          <span onClick={()=>changeCategory("music")} className='categoryBtn bg-neutral-800 rounded-lg px-2 hover:bg-neutral-700 active:scale-95'>Music </span>
                        </div>
                        <div>
                      
                      <div className='bg-neutral-950 latest h-40  mt-2 sm:h-50  rounded-3xl overflow-scroll px-1 flex flex-col flex-wrap mb-10  '>
                            {categorisedBlog.length>0 ? categorisedBlog.slice(0,5)?.map((v,i)=>{
                                return <div key={i} onClick={()=>onBlogClick(v.id)} className='m-1.5 bg-neutral-800 h-11/12 w-3/5 sm:w-3/5 rounded-2xl grid grid-cols-2  p-4' >
                                  <div className='flex items-center h-full  '>
                            <img src={v.img? v.img : "https://th.bing.com/th/id/OIP.g9yG_jXgnMvRU_1DFJkquwHaEK?r=0&rs=1&pid=ImgDetMain"}  className="w-4/5 rounded-xl " alt="thumbnail" />
                            
                                  </div >
                                  <div className='flex items-center ' >{v.title}</div>
                                </div>
                            }): <p className='w-full h-full flex justify-center items-center bg-neutral-950' >No Blogs for this category</p>}
                            { categorisedBlog.length>4 && <div className='m-1.5 h-11/12 w-1/10 flex justify-center items-center '>
                              <span className='w-11/12 h-2/9 rounded-xl text-xl bg-neutral-300 text-black flex items-center  justify-center '>
                              <br />
                              <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </div>}
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                            </div>
                ) :
                <div>
                <div className='mt-15 text-lg md:text-2xl'>" Please login first to acces this application"</div>
                { 
        }
                </div>
                  }
            </div>
            {/* <Footer/> */}
    </div>
  )
}

export default Home
