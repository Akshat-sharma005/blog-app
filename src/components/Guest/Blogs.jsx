import React from 'react'
import { data } from '../Context'
import parse from "html-react-parser";
import { useNavigate } from 'react-router';
import Auth from '../Auth';
function Blogs() {
  const navigate=useNavigate()
    const {blogs}=data()
  const onBlogClick=(id)=>{
    navigate(`/blog/${id}`);
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
    <div className='ck-content md:m-16 m-4 md:p-8 p-2  flex justify-center '>
      <div  className='grid md:grid-cols-4 grid-cols-1 gap-4 w-5xl' >
        {blogs.map((v,i)=>{
         return  <div key={v.id} style={{backgroundImage:`url(${images[Math.floor(Math.random()*13)]})`}} onClick={()=>onBlogClick(v.id)} className={`${(i+1)%3==0 && "md:col-span-2 md:min-h-80  md:row-span-4 "} bg-blend-normal   bg-cover bg-center bg-neutral-800 rounded-xl md: min-h-40 overflow-hidden flex items-end `}>
         <p className='bg-neutral-900 opacity-80  font-mono w-full text-center'>{v.title}</p> </div>
        })}
      </div>
      
    </div>
  )
}

export default Auth (Blogs)
