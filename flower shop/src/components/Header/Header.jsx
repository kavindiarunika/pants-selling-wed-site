import React from "react";
import Homepage from "../../assets/assests";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { Link } from "react-router-dom";

const Header = () => {
    
    const[isLoginvisible ,setisLoginvisible] =useState(false);
    const[isSignupvisible ,setisSignupvisible]=useState(false);

    const openLogin =() =>{
        setisLoginvisible(true);
        setisSignupvisible(false);

    }
    const openSignup =() =>{
        setisSignupvisible(true);
        setisLoginvisible(false);
    }
    const onClose =()=>{
        setisLoginvisible(false);
        setisSignupvisible(false);
    }

    return (
        <div className=" bg-slate-900 bg-opacity-50 w-full h-40 flex flex-col items-center px-5 py-3">
            
            <div className="flex w-full items-center justify-between">
            
                <img src={Homepage.logo} alt="Company Logo" className="w-30 h-28 ml-3" />

                
                <nav className="flex-1 flex justify-center">
                    <ul className="flex space-x-8 font-bold text-xl gap-16">
                       <Link to="/Home"> <li className="text-green-900 hover:text-gray-400 cursor-pointer">Home</li></Link>
                        <Link to="/About"><li className="text-green-900 hover:text-gray-400 cursor-pointer">About Us</li></Link>
                        <li className="text-green-900 hover:text-gray-400 cursor-pointer">Contact Us</li>
                    </ul>
                </nav>

                
                <div className="flex items-center space-x-4 gap-10">
                    <button
                     type="button"
                     onClick={openSignup}
                      className="py-2 px-5 w-32 bg-gradient-to-r from-green-900 to-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-violet-600">
                        Sign up
                    </button>
                    <Signup
                     isopen={isSignupvisible} 
                     onClose={onClose}
                     openLogin={openLogin} />
                    <button type="button" onClick={openLogin} 
                    className="py-2 px-5 w-32 bg-gradient-to-r from-green-900 to-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-violet-600">
                        Login
                    </button>

                    <Login 
                    isOpen={isLoginvisible} 
                    onClose={onClose}
                    openSignup={openSignup}/>
                    
                <Link to='/Cart'><img src={Homepage.shopping} alt="Shopping Icon" className="h-16 w-16 cursor-pointer"  /></Link>    
                </div>
            </div>

           
            <div className="relative mt-3 ml-48 w-10/12">
                <input
                    type="search"
                    className="w-full h-10 pl-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 bg-opacity-30 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search plants..."
                />
                <IoSearch className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-black size-8" />
            </div>
           
        </div>
    );
};

export default Header;
