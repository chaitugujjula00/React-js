import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { Link } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");
  const  submit=(e)=>{
    e.preventDefault()
    if(email.trim()=='' || userName.trim()=='' || password.trim()==''){
      setMessage("Space is can't be a input")
      return;
    }
    axios.post("http://localhost:3000/signup",{
      email,userName,password
    }).then((res)=>{
      if(res.status==200){setMessage(res.data.message);}
      else{
        navigate('/login')
      }
    }).catch((e)=>{
      console.log(e)
    })
  }

  return (
    <div className='flex flex-col items-center px-6 pt-28 mx-auto md:h-screen'>
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-pink-300 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-black">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="POST">
                   <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                      <label for="userName" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                      <input type="text" name="userName" id="userName"  onChange={(e)=>{setUserName(e.target.value)}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                  </div>
                  <button type="submit" onClick={submit} className="w-full text-white bg-primary-600 border-2 border-gray-600  focus:ring-4 focus:outline-none focus:ring-primary-300  font-medium rounded-lg text-base px-5 py-2.5 text-center  hover:border-2 hover:border-pink-500 hover:bg-pink-400">Sign Up</button>

                  {message.length > 0 
                  && 
                  <h2 className='text-lg text-white bg-red-500 px-4 py-2 rounded-xl'>{message}</h2>
                  }

                  <p className="text-sm font-light text-gray-800 ">
                      Already had an account? <a href="#" className="font-medium text-gray-800 hover:underline "><Link to='/login'>Login</Link></a>
                  </p>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Signup