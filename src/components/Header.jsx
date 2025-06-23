import React, { useState } from "react";
import { NavLink } from "react-router";
import { data } from "./Context";
import Nav from "./Nav";


function Header({ children }) {
  const { isLogin, setShowToast,showHeader,setShowHeader } = data();

  return (
    <>
      <div className="mt-0 header bg-black  fixed hidden md:flex items-center justify-between pt-0 pr-5 z-40">
        <Nav/>
      </div>
      <div onClick={()=>{setShowHeader(!showHeader)
       
      }} className=" md:hidden absolute right-8 top-2 z-40   ">
        <i className="fa-solid fa-bars"></i>
        <div>
        <Nav/>
        </div>
      </div>
      <div className={`${showHeader && "absolute m-0 p-0 top-0 left-0 w-screen h-screen sm: bg-neutral-800 opacity-60 md:opacity-100  md:bg-black "} pt-18 `}>{children}</div>
      
    </>
  );
}

export default Header;
