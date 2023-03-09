import React from 'react';
import google from "../../Images/google.svg"

const Login = () => {
    const url = "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
    return (
        <div className='md:flex h-screen'>
            {/* image  */}
            <div className='flex-1 h-[calc(100vh-70px)] flex justify-center items-center' >
                <img className='w-auto h-auto' src={url} alt="login img" />
            </div>

            {/* login form  */}
            <div className='flex-1 h-[calc(100vh-70px)] flex justify-center items-center '>
                <div className='max-w-[26rem] min-w-[25rem] p-4 bg-gray-50 rounded-md'>

                    <div className='mb-5'>
                        <h2 className='text-2xl font-bold text-gray-900'>Sign in to your account</h2>
                    </div>


                    <form action="">
                        <div className='flex flex-col mb-2'>
                            <label htmlFor="email" className='text-gray-600 text-base '>Email Address</label>
                            <input type="email" name="email" id="email" className='border-none' />
                        </div>
                        <div className='flex flex-col mb-6'>
                            <label htmlFor="password" className='text-gray-600 text-base '>Password</label>
                            <input type="password" name="password" id="password" className='border-none' />
                        </div>

                        <div className='mb-6'>
                            <button type="submit" className='bg-[#2563EB] w-full text-white text-lg font-medium py-2 rounded-md'>Login</button>
                        </div>

                        <div className='mb-2'>
                            <p>Don’t have an account yet?<span className='text-[#2563EB]'> Sign up</span></p>
                        </div>

                        <div
                            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p
                                className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>

                    </form>

                    <div className='mb-2'>
                        <button type="submit" className='bg-[#2563EB] w-full h-14 text-white text-lg font-medium border-2 border-[#2563EB] rounded-md flex items-center'>
                            <img className='w-16 h-full rounded-l-md bg-white mr-6' src={google} alt="google icon" />
                            <span className='text-lg'>Sign in with google</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;