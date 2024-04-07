import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  // const submit= async ()=>{
  //   // preventDefault()

  //   await axios.post("http://localhost:3000/login",{
  //     email,password
  //   }).then((res)=>{
  //     console.log(res.data);
  //     return(<div>{res.data}</div>)
  //   }).catch((e)=>{
  //     console.log(e)
  //   })
  // }
  return (
    <div className='flex flex-col items-center px-6 pt-28 mx-auto md:h-screen'>
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-pink-300 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-black">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                   <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                    </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value);}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                  </div>
                  {/* <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 ">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                  </div> */}
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 border-2 border-gray-600 font-medium rounded-lg text-base px-5 py-2.5 text-center hover:border-2 hover:border-pink-500 hover:bg-pink-400">Sign in</button>
                  <p className="text-sm font-light text-gray-800 ">
                      Don’t have an account yet? <a href="#" className="font-medium text-gray-800 hover:underline "><Link to='/signup'>Sign up</Link></a>
                  </p>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Login