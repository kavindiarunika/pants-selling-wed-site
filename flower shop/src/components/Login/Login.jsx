import React from 'react';
import Modal from 'react-modal'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


Modal.setAppElement('#root');

function Login({ isOpen, onClose,openSignup }) {



    return (
        <Modal isOpen={isOpen} className='bg-emerald-500 bg-opacity-65 mt-80  w-2/3 ml-72 rounded-3xl shadow-2xl shadow-black'>


            <div className='flex  -mt-32 mb-10'>
                <div className='w-1/2'>
                    <img src="https://koala.sh/api/image/v2-by5hd-cm559.jpg?width=1216&height=832&dream" className='h-full rounded-l-3xl' alt='' />

                </div>

                <div className='w-1/2'>

                    <h1 className='mt-10 font-mono text-4xl font-bold text-center'>Welcome</h1>
                    <div className='  mt-10 ml-10'>
                        <label className='font-mono text-xl font-bold text-opacity-80' >Username:</label>
                        <div className='flex relative'>
                        <FaUser className='   mt-2 w-5 h-5 ' />
                            <input className='bg-slate-50 bg-opacity-60 rounded-lg w-96 h-9 ml-3 text-black text-center focus:outline-green-500' type="text"  name="username" placeholder="    Enter your email..." />
                        </div>

                    </div>
                    <div className=' mt-4 ml-10'>
                        <label className='font-mono text-xl font-bold text-opacity-80'>Password:</label>
                        <div className='flex'>
                        <RiLockPasswordFill className='   mt-2 w-5 h-5 '  />
                            <input  className='bg-slate-50 bg-opacity-60 rounded-lg w-96 h-9 ml-3 text-black text-center focus:outline-green-500 'type="password" name="password" placeholder="Enter your password..." />
                        </div>
                    </div>
                    <p onClick={openSignup} className='text-left float-right mr-16 mt-3 cursor-pointer hover:text-green-950'>Don't have an account?</p>
                    <div className='flex mt-20 ml-20  mb-10'>
                        
                    <button type="button" class=  "w-40 text-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    <button type="button" onClick={onClose} class="ml-10 w-40 text-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
                    </div>
                </div>
            </div>

        </Modal>
    );
}

export default Login;
