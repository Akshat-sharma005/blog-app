import React from 'react'
import { data } from '../Context'

function DeleteModal() {
    const {showDeleteModal,onDelete,setShowDeleteModal,deleteId}=data();
  return (
    <div>
        { showDeleteModal && <> 
       <div class="fixed inset-0 bg-gray-500/75 transition-opacity z-40 " aria-hidden="true"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto z-40">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <svg class="size-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-base font-semibold text-gray-900" id="dialog-title">Delete Blogd</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Are you sure you want to delete this blog</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-4">
            <button onClick={()=>onDelete(deleteId)} type="button" class="inline-flex w-full justify-center rounded-md bg-neutral-50 gover bg-neutral-300  px-3 py-2 text-sm font-semibold text-black shadow-xs  sm:w-auto">Delete</button>
            <button onClick={()=>setShowDeleteModal(!showDeleteModal)} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-neutral-800 sm:mt-0 sm:w-auto">Cancel</button>
          </div>
        </div>
      </div>
    </div></>}
  </div>


  )
}

export default DeleteModal
