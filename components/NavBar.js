'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { UserAuth } from '@/app/context/AuthContext'


const NavBar = () => {
  const {user,googleSignIn,logOut}=UserAuth()
  const [loading,setLoading]= useState(true)
   
  const handleSignIn=async()=>{
    try{
      await googleSignIn()
    }catch(error){
      console.log(error)
    }
  }
  const handleSignOut=async()=>{
    try{
      await logOut()
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{const checkAuthentication=async()=>{
    await new Promise((resolve)=>setTimeout(resolve,50))
    setLoading(false)
  };
  checkAuthentication();
},[user])


  return (
    <>
    
<div className=" navbar bg-cyan-300  border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Personal</a>
  </div>
  <div className='flex-1  bg-cyan navbar-center gap-5'>
  <Link href='/' className='   hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'> <button>Homepage</button></Link>
    <Link href="/blog" className=' hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>     <button>Blog</button></Link>
    <Link href='/about' className=' hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>     <button>About</button></Link>
      
   </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/logo.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <button className="justify-between">
            Profile
            <span className="badge">New</span>
          </button>
        </li>
        {loading ?null:!user?(<ul className='flex'>
        <li onClick={handleSignIn }><button>Login</button></li>
        <li onClick={handleSignIn }><button>Signup</button></li>
        
        </ul>):<div>
          <p>Welcome ,{user.displayName}</p></div>}
          <li onClick={handleSignOut}><a>Sign out</a></li>
          
      </ul>
    </div>
  </div>
</div>
</>
  )
}

export default NavBar;
