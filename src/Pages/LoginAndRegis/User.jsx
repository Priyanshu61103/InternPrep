import React, { useState } from 'react'
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";

const User = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
            {isLogin ? (
                <div className="relative pb-32">
                    <Login />
                    <div className="flex flex-col items-center justify-center mt-8 px-4">
                        <p className="text-white text-center mb-4">
                            Don't have an account?
                        </p>
                        <button 
                            onClick={() => setIsLogin(false)}
                            className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            ) : (
                <div className="relative pb-32">
                    <SignUp />
                    <div className="flex flex-col items-center justify-center mt-8 px-4">
                        <p className="text-white text-center mb-4">
                            Already have an account?
                        </p>
                        <button 
                            onClick={() => setIsLogin(true)}
                            className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default User