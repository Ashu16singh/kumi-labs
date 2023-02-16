import React from "react";

function LogIn()
{
  return(
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full mx-5">

<div className="hidden sm:block">
<img className="w-full h-full object-cover" src="https://thepizzadine.com/images/photo-about.jpg" alt="img" />
 </div>

 <div className="bg-gray-100 flex flex-col justify-center">
 <form className="max-w-[400px]  mx-20 bg-white  p-4">
  <h1 className="text-4xl font-semibold text-center py-6">Sign In</h1>
  <div className="flex flex-col py-2">
  <label>User Name</label>
  <input className="border p-2" type="text" placeholder="Full Name"/>
              </div>

              <div className="flex flex-col py-2">
              <label>Password</label>
              <input className="border p-2" type="password"  placeholder="Password"/>
                          </div>


                            <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">Log In</button>
                  <div className="flex justify-between">
                <p className="flex items-center"> <input className="mr-2" type="checkbox"/>Remember Me </p>
                <p>Don't have an account?</p>
                       </div>
        </form>
    </div> </div>

    </>
  )
}

export default LogIn;
