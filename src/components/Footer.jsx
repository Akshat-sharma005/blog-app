import React from 'react'

function Footer() {
  return (
    <div className=' relative bottom-0 w-screen h-30 bg-neutral-900 flex justify-center'>
        <div className='flex flex-col gap-2 text-neutral-400 text-sm w-7/10 p-4'>
            <div>Abc@gmail.com</div>
            <div className='flex items-baseline'><i class="fa-regular fa-copyright"></i> &ensp; copyright Akshat-Sharma</div>
            <div className='flex items-baseline'><i class="fa-regular fa-address-book"></i> &ensp; 0755XXXX</div>
        </div>

    </div>
  )
}

export default Footer
