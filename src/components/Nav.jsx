import React from 'react'
import { NavLink, useNavigate } from "react-router";
import { data } from "./Context";
function Nav() {
    const navigate=useNavigate();
    const {isLogin,setShowToast,showHeader,setShowHeader,setIsLogin,setCurrentUser,currentUser}=data();
    const onLogout = () => {
    setShowToast(true);
  }
   const onBtnClick=()=>{
        setIsLogin(false)
        setCurrentUser({});
        navigate("/",{replace:true})
           sessionStorage.removeItem("currUser")
        sessionStorage.removeItem("isLoggedIn")
       

    }
  return (
    <>
    <nav className={`${showHeader?"flex z-40  bg-black":"hidden"} bg-black p-3   fixed top-8 md:flex scroll-m-0 right-0 mr-0 items-center  flex-col md:relative md:top-0   md:flex-row  gap-8 pl-5  text-lg z-30 `}>
          <i className="fa-brands fa-pied-piper-alt text-amber-50 p-0 text-2xl"></i>
          <NavLink
            className={
              "text-emerald-50 px-2 font-mono rounded-2xl hover:bg-neutral-800 active:scale-95 "
            }
            to={"/"}
          >
            {" "}
            Home
          </NavLink>
          
          <NavLink
            className={
              "text-emerald-50 px-2 font-mono rounded-2xl hover:bg-neutral-800 active:scale-95 "
            }
            to={currentUser.identity=="admin" ? "/admin/blogs" : "/blogs"}
          >
            {" "}
            blogs
          </NavLink>
          <NavLink
            className={
              "text-emerald-50 px-2 font-mono rounded-2xl hover:bg-neutral-800 active:scale-95 "
            }
            to={currentUser.identity=="admin" ? "/admin/profile" : "/profile"}
          >
            {" "}
            Profile
          </NavLink>
          {!isLogin && (
            <>
              {" "}
              <NavLink
                className={
                  "text-emerald-50  font-mono rounded-2xl px-2 hover:bg-neutral-800 active:scale-95 "
                }
                to={"/login"}
              >
                Login
              </NavLink>
              <NavLink
                className={
                  "text-emerald-50 font-mono rounded-2xl px-2 hover:bg-neutral-800 active:scale-95 "
                }
                to={"/signup"}
              >
                {" "}
                Sign-up
              </NavLink>{" "}
            </>
          )}
             {showHeader &&
             <div>
          {isLogin && (
            <button
              onClick={onLogout}
              className={
                "text-emerald-50 font-mono rounded-2xl px-2 hover:bg-neutral-800 active:scale-95  "
              }
              to={"/logout"}
            >
              {" "}
              Logout
            </button>
          )}
        </div>
             }
        </nav>
        <div>
          {isLogin && (
            <button
              onClick={onLogout}
              className={
                "text-emerald-50 font-mono rounded-2xl px-2 hover:bg-neutral-800 active:scale-95 hidden md:block  "
              }
              to={"/logout"}
            >
              {" "}
              Logout
            </button>
          )}
        </div>
         

    </>
  )
}

export default Nav
