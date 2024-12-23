import React, { useContext } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { BiSolidSquareRounded } from "react-icons/bi";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from 'react';
import { userAuth } from '../Card/Card';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';


function Buynow({ passDetail }) {

   
        const {addItem} =useCart();
   

    const navigate =useNavigate();

    const handlecartpage =()=>{
        addItem({
            id:passDetail.id,
            name: passDetail.name,
            price: passDetail.price,
            image: passDetail.image,
            quantity: 1,
        })

        navigate('/Cart');
       
    }

    const {setshowDetail} =useContext(userAuth)
    const [afterselect, setafterselect] = useState("Select color");
    const [isopen, setisopen] = useState(false);
    const [count, setcount] = useState(0);
    const handlecount = () => {
        setcount(count + 1);
    }

    const handlemines = () => {
        setcount(count - 1);
    }
    const handlebuy = () => {
        if (count >= 1) {
            alert("buy successfully.thank you order with camelia");
        }
        else {
            alert("not add proper guantity")
        }
    }
    return (
        <div>

            <div className="overflow-scroll overflow-y-auto fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="  relative bg-white rounded-lg p-5 w-3/4 h-auto overflow-y-scroll bg-[url('https://t4.ftcdn.net/jpg/01/25/64/57/360_F_125645781_UTdrneafxyuRvENFjA2wlwR5rmE1nvZ8.jpg')] bg-cover bg-center ">
                    <IoIosCloseCircle className='float-right text-red-700 active:text-red-800 size-7' onClick={()=>setshowDetail(false)} />
                    <div className='relative flex'>
                        <div className='relative w-1/3'>
                            <img src={passDetail.image} className='w-full h-auto border-8 border-lime-900 border-opacity-75 mt-10' alt='' />
                            <span className='absolute ml-60 -mt-14 text-red-800 text-5xl font-bold'>{passDetail.price}.00</span>
                        </div>

                        <div className=' relative w-1/2 mt-28 ml-20  float-right'>
                            <h1 className=' ml-20 text-4xl  font-mono text-pink-800  font-bold' >{passDetail.name}</h1>
                            <p className='mt-8 ml-2 text-2xl font-bold text-opacity-60'>{passDetail.desc}</p>
                            <div className='flex  gap-14'>
                                <div className='w-40 h-auto bg-slate-800 rounded-lg mt-10  shadow-2xl shadow-black '>
                                    <p className='text-slate-400 mt-3 ml-5'>Colors Available</p>
                                    <button className='flex py-2 px-5 rounded-xl  bg-yellow-600 mt-3 ml-7 mr-3 mb-5' onClick={() => { setisopen(true) }} >{afterselect}<IoMdArrowDropdownCircle className='mt-1 ml-2 size-5' /> </button>
                                    {isopen && (
                                        <div className='border-2 border-black bg-slate-900 '>
                                            <ul className='list-none '>
                                                <li className='flex text-m text-white mt-3 hover:cursor-pointer' onClick={() => { setafterselect("Red"); setisopen(false); }}><BiSolidSquareRounded className='size-4 text-red-600 ml-3 mt-2' />Red</li><hr className='text-slate-500' />
                                                <li className='flex text-m text-white mt-3 hover:cursor-pointer' onClick={() => { setafterselect("Green"); setisopen(false); }}><BiSolidSquareRounded className='size-4 text-green-600 ml-3 mt-2' />green</li><hr className='text-slate-500' />
                                                <li className='flex text-m text-white mt-3 hover:cursor-pointer' onClick={() => { setafterselect("Pink"); setisopen(false); }}><BiSolidSquareRounded className='size-4 text-pink-600 ml-3 mt-2' />pink</li><hr className='text-slate-500' />
                                                <li className='flex text-m text-white mt-3 hover:cursor-pointer' onClick={() => { setafterselect("Yellow"); setisopen(false); }}><BiSolidSquareRounded className='size-4 text-yellow-600 ml-3 mt-2' />yellow</li><hr className='text-slate-500' />
                                                <li className='flex text-m text-white mt-3 hover:cursor-pointer' onClick={() => { setafterselect("Purple"); setisopen(false); }}><BiSolidSquareRounded className='size-4 text-purple-600 ml-3 mt-2' />purple</li>
                                            </ul>

                                        </div>
                                    )}
                                </div>
                                <div className='w-52 h-auto bg-slate-800 rounded-lg mt-10  shadow-2xl shadow-black '>
                                    <p className='text-slate-400 mt-3 ml-7'>Quantity</p>
                                    <div className='flex py-2 px-5 rounded-xl  bg-yellow-600 mt-3 ml-4 mr-3 mb-5 gap-6 w-'>
                                        <FaPlusCircle className='size-6' onClick={handlecount} />
                                        <span className='text-m -mt-1'>{count}</span>
                                        {count > 0 ? (
                                            <div className='flex'>
                                                <FaMinusCircle className='size-5' onClick={handlemines} />
                                            </div>
                                        ) : (
                                            <div> </div>
                                        )}
                                    </div>
                                </div>

                                <div className='w-40 h-auto bg-slate-800 rounded-lg mt-10  shadow-2xl shadow-black '>
                                    <p className='text-slate-400 mt-3 ml-7'>Delevery</p>
                                    <div className='flex py-2 px-5 rounded-xl  bg-yellow-600 mt-3 ml-4 mr-3 mb-5'>
                                        <p>$4.00 for delivery charges </p>
                                        <MdDeliveryDining className='size-16' />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className=' float-right mr-32 '>
                        <button 
                        className='  w-96 p-3 bg-orange-400 text-bold  mt-5 rounded-2xl hover:cursor-pointer hover:bg-orange-500  '
                        onClick={handlecartpage}>Add items to cart</button><br />
                        <button className=' w-96 p-3 bg-red-500 text-bold mt-10 rounded-2xl hover:cursor-pointer hover:bg-red-600  ' onClick={handlebuy}>Buy items Now</button>
                    </div>
                </div>
            </div>


        </div>
    )
}



export default Buynow
