import React from 'react'

const Login = () => {
  return (
<section class='bg-gray-500'>
    <form>
       <h1>Sign In</h1> 
       <label for='user-name'>User Name</label>
       <input type={text}></input>
       <label for='password'>Password</label>
       <input type={password}></input>
    </form>
</section>
  )
}

export default Login