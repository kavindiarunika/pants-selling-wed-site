import React, { useState } from 'react'
import Modal from 'react-modal';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Login from '../Login/Login';

Modal.setAppElement('#root');



function Signup ({isopen,onClose,openLogin}){
    return(
        <Modal isOpen={isopen} className='relative z-50 bg-emerald-500 bg-opacity-65 mt-52  w-2/3 ml-72 rounded-3xl shadow-2xl shadow-black'>
        <div className='relative z-50 flex  -mt-32 mb-10'>
        <div className='w-1/2'>
            <img src="https://img.freepik.com/free-photo/green-leaves-plant-white-pot-against-white-background_23-2148053538.jpg" className='h-full rounded-l-3xl' alt='' />

        </div>

        <div className='w-1/2'>

            <h1 className='mt-10 font-mono text-4xl font-bold text-center'>Sign up</h1>
            <div className='  mt-10 ml-10'>
                <div className='flex'>
                
                <label className='ml-10 font-mono text-sm font-bold text-opacity-80 float-left' >First name</label>
                <label className='ml-32 font-mono text-sm font-bold text-opacity-80 float-right' >Last name</label>

            </div>
               
                <div className='flex  '>
                <FaUser  className='absolute ml-4 w-5 h-5 mt-2 opacity-70' />
                    <input className='bg-slate-50 bg-opacity-60 rounded-lg w-42 h-9 ml-3 text-black text-center focus:outline-green-500' type="text"  name="username" />
                    <FaUser  className='absolute ml-56 w-5 h-5 mt-2 opacity-70' />
                    <input className='ml-6 bg-slate-50 bg-opacity-60 rounded-lg w-42 h-9  text-black text-center focus:outline-green-500' type="text"  name="username"  />
                </div>

            </div>
            <div className=' mt-4 ml-10'>
            <label className='ml-5 font-mono text-sm font-bold text-opacity-80 ' >e-mail</label>
                <div className='flex relative'>
                <MdEmail  className='absolute ml-4 w-5 h-5 mt-2 opacity-70'/>
                    <input  className='bg-slate-50 bg-opacity-60 rounded-lg w-96 h-9 ml-3 text-black text-right focus:outline-green-500 'type="email" name="password" placeholder="@gmail.com" />
                </div>
            </div>
            <div className=' mt-4 ml-10'>
            <label className='ml-5 font-mono text-sm font-bold text-opacity-80 ' >Password</label>
                <div className='flex relative'>
                <RiLockPasswordFill className='absolute ml-4 w-5 h-5 mt-2 opacity-70' />
                    <input  className='bg-slate-50 bg-opacity-60 rounded-lg w-96 h-9 ml-3 text-black text-right focus:outline-green-500 'type="password" name="password"  />
                </div>
            </div>
            <div className=' mt-4 ml-10'>
            <label className='ml-5 font-mono text-sm font-bold text-opacity-80 ' >confirm password</label>
                <div className='flex relative'>
                <RiLockPasswordFill  className='absolute ml-4 w-5 h-5 mt-2 opacity-70'/>
                    <input  className='bg-slate-50 bg-opacity-60 rounded-lg w-96 h-9 ml-3 text-black text-right focus:outline-green-500 'type="password" name="password"  />
                </div>
            </div>
        <p onClick={openLogin} className='text-left float-right mr-16 mt-3 cursor-pointer hover:text-green-950'>Already have an acount?</p>

            <div className='flex mt-20 ml-20  mb-10'>
                
            <button type="button" class=  "w-40 text-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
            <button type="button" onClick={onClose} class="ml-10 w-40 text-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
            </div>
        </div>
    </div>

</Modal>
    )
}
export default Signup;
