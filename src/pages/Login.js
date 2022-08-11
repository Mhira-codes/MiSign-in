import React from 'react'
import { useEffect, useState, useRef } from 'react'
import {Link } from "react-router-dom"



const Login = () => {
const userRef = useRef()
const errRef = useRef()



const [username , setUsername]= useState('')
const [password , setPassword]= useState('')
const [errormsg , setErrorMsg]= useState('')
const [sucess , setSucess]= useState(false)

useEffect(()=> {
userRef.current.focus();
  },[]
)
useEffect( ()=>{
setErrorMsg('');
},[username,password]
)


const submitForm =async (e)=>{
  e.preventDefault();
console.log(username,password);
setUsername('');
setPassword('')
setSucess(true)
}
  return (
<>{sucess?(
 <section className=' w-screen h-screen flex items-center justify-center'>
  <form className='w-[370px] bg-slate-300 h-60  flex items-center  flex-col justify-center px-9'>
<h3 className='font-bold'>  Hurray!!, You are logged in</h3>

  <Link to = "/">
    <p>Go To Home</p>
    </Link>

</form>
 </section>
):(
 


<section className=' w-screen h-screen flex items-center justify-center'>
  <p ref={errRef} classname={errormsg? 'errormsg': 'offscreen'} aria-live='assertive'>{errormsg}</p>
    <form onSubmit={submitForm} className='w-[370px] bg-slate-300  items-center py-9 justify-center px-9 rounded'>
       <h1 className='text-4xl font-semibold pb-5 text-center'>Sign In</h1> 
       <label for='user-name' class='text-[16px] '>User Name</label>
       <div class='pt-2 pb-3 '> 
           <input 
           type="text"
           id="username"
           ref={userRef}
           onChange={(e)=>setUsername(e.target.value)}
           value={username}
           autoComplete='off'
           required
            className='w-full h-9  rounded outline-none border-solid border-[1px] border-cyan-800 pl-3'
             />
       </div>
   
       <label for='password' className='text-[16px]'>Password</label>
       <div class='pt-2'>  
         <input 
         type="password" 

         onChange={(e)=>setPassword(e.target.value)}
         value={password}
         required
         className='w-full h-9 rounded outline-none border-solid border-[1px] border-cyan-800 pl-3'/>
       </div>
       <div>
      <button className=' bg-zinc-400  w-[150px] mt-5 py-2 uppercase mb-5'>Sign In</button>
       </div>
       <h3>Need an Account?</h3>
       
       <Link  to = "/signup">
       <h3 className='cursor-pointer'>SIGN UP</h3>
       </Link >
         
              

   
    </form>
</section>
 )}
 </>
  )
 
}

export default Login