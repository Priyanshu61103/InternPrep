import React from 'react'

const Login = () => {
    return (
        <div className='bg-gray-800 h-screen w-full'>
            <div>
                <h1 className='text-6xl text-white font-medium'>Get Started Now</h1>
                <form>
                    <div>
                        <span className='text-white'>Name</span>
                        <br/>
                        <input name='userEmail' type='email' className='bg-white' />
                    </div>
                    <div>
                        <span className='text-white'>Name</span>
                        <br/>
                        <input name='userEmail' type='email' className='bg-white' />
                    </div>
                    <div>
                        <span className='text-white'>Name</span>
                        <br/>
                        <input name='userEmail' type='email' className='bg-white' />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
