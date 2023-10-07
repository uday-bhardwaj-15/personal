import React from 'react'
import Link from 'next/link'

const page = () => {
  
  return (
    <div>
 
<div className="heading text-center font-bold text-2xl m-5 text-gray-800 ">New Post</div>

  

  <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg  opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ">
     <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text"/> 
    <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
    
  
    <div className="icons flex text-black-500 m-2">
      <svg className="mr-2 cursor-pointer hover:text-red-700 border rounded-full p-1 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-red-700 border rounded-full p-1 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-red-700 border rounded-full p-1 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      <div className="count ml-auto text-black-400 text-xs font-semibold">0/300</div>
    </div>
    
    <div class="buttons flex">
      <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
      <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
    </div>
<div>
<input className="comment bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-full " type='text' placeholder=' Leave a comment'/>
</div>
  </div>
    </div>
  )
}

export default page
