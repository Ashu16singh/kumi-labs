
function Register()
{
  return(
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 h-screen  mx-5">

<div className="hidden sm:block bg-gray-100">
<img className="w-150 h-150 ml-10  " src="https://thepizzadine.com/images/about-pizzon.png" alt="img" />
 </div>

 <div className="bg-gray-100 flex flex-col justify-center">
 <form className="max-w-[400px] mr-20 bg-white  p-4">
  <h1 className="text-4xl font-semibold text-center py-6">Sign In</h1>
  <div className="flex flex-col py-2">
  <label>Full Name</label>
  <input className="border p-2" type="text" placeholder="User Name"/>
              </div>

              <div className="flex flex-col py-2">
              <label>Email</label>
              <input className="border p-2" type="email" placeholder="Email"/>
                          </div>

                          <div className="flex flex-col py-2">
                          <label>Contact No.</label>
                          <input className="border p-2" type="number" placeholder="Contact number"/>
                                      </div>


              <div className="flex flex-col py-2">
              <label>Password</label>
              <input className="border p-2" type="password"  placeholder="Password"/>
                          </div>


                            <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">Sign Up</button>
                  <div className="flex justify-between">
                <p className="flex items-center"> <input className="mr-2" type="checkbox"/>Remember Me </p>
                <p>Have an account? SignIn</p>
                       </div>
        </form>
    </div> </div>

    </>
  )
}


export default Register;
