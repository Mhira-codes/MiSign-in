import React from 'react'

const Signup = () => {
  return (
    <section class='bg-indigo-400 w-screen h-screen flex items-center justify-center'>
    <form class='inline'>
       <h1>Sign In</h1> 
       <label for='name'> First Name</label>
       <div> 
           <input type="text" />
       </div>
       <label for='name'> Last Name</label>
       <div> 
           <input type="text" />
       </div>
       <label for='email-address'> Email</label>
       <div> 
           <input type="email" />
       </div>
   
       <label for='password'>Create Password</label>
       <div>    <input type="password" className='border border-red-800'/>
       </div>
  
       <label for='password'>Confirm Password</label>
       <div>    <input type="password" className='border border-red-800'/>
       </div>
       <div>
      <button>Sign up</button>
       </div>
      
   
  
   
   
    </form>
</section>
  )
}

export default Signup