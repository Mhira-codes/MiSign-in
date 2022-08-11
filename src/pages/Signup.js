import React from 'react'

const Signup = () => {
  return (
    <section class=' w-screen h-screen flex items-center justify-center'>
    <form className='w-[370px] bg-slate-300  items-center py-9 justify-center px-9 rounded' >
      <div className='mb-2'>
          <h2 className='text-center text-2xl font-bold text-slate-900'>Sign Up</h2></div>
    
     <div >
       <label for='name' className='pb-2 text-slate-900 text-sm font-medium'> First Name</label>
       <div> 
           <input type="text"
           className='w-full h-9  rounded outline-none  pl-3 border-solid border-[1px] border-cyan-800' />
       </div>
       </div>
      <div className='mt-2' >
      <label for='name' className='text-slate-900  text-sm font-medium' > Last Name</label>
       <div> 
           <input type="text"
             className='w-full h-9  rounded outline-none pl-3 border-solid border-[1px] border-cyan-800' />
       </div>
      </div>
       <div className='mt-2'> 
       <label for='email-address' className='text-slate-900 text-sm font-medium'> Email</label>
       <div> 
           <input type="email"
             className='w-full h-9  rounded outline-none  pl-3 border-solid border-[1px] border-cyan-800' />
       </div>
       </div>
    
   <div className='mt-2'>
     <label for='password' className='text-slate-900 text-sm font-medium'>Create Password</label>
       <div>    <input type="password" 
         className='w-full h-9  rounded outline-none  border-solid border-[1px] border-cyan-800 pl-3'
       />
       </div>
       </div>
      
  <div className='mt-2'> 
   <label for='password '  className='text-slate-900 text-sm font-medium' >Confirm Password</label>
       <div>    <input type="password" 
         className='w-full h-9  rounded outline-none  border-solid border-[1px] border-cyan-800 pl-3'
       />
       </div></div>
     
       <div>
      <button className=' bg-zinc-400  w-[155px] mt-5 py-2 uppercase mb-5 text-slate-900  font-extrabold'>Create Account</button>
       </div>
       <div></div>
      
   
  
   
   
    </form>
</section>
  )
}

export default Signup