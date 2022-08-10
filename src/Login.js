import React from 'react'
import { useEffect, useState, useRef } from 'react'
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
<section class='bg-indigo-400 w-screen h-screen flex items-center justify-center'>
  <p ref={errRef} classname={errormsg? 'errormsg': 'offscreen'} aria-live='assertive'>{errormsg}</p>
    <form onSubmit={submitForm} className='w-[370px] bg-slate-300  items-center  justify-center px-9'>
       <h1 className='text-4xl font-semibold pt-5 pb-5 text-center'>Sign In</h1> 
       <label for='user-name' class='text-xl '>User Name</label>
       <div class='pt-2 pb-3 '> 
           <input 
           type="text"
           id="username"
           ref={userRef}
           onChange={(e)=>setUsername(e.target.value)}
           value={username}
           required
            className='w-full h-9  rounded outline-none border-indigo-300'
             />
       </div>
   
       <label for='password' className='text-xl'>Password</label>
       <div class='pt-2'>  
         <input 
         type="password" 

         onChange={(e)=>setPassword(e.target.value)}
         value={password}
         required
         className='w-full h-9 rounded outline-none border-indigo-300'/>
       </div>
       <div>
      <button className=' bg-zinc-400  w-[150px] mt-5 h-[40px] text-xl uppercase mb-5'>Sign In</button>
       </div>
       <h3>Need an Account?</h3>
       
       <h3>Sign up</h3>
         
              

   
    </form>
</section>
  )
}

export default Login