import React, { useState,createContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import Buynow from '../Buynow/Buynow';

export const userAuth =createContext({})

function Card({ banner, pages = [] }) { 

    const [showDetail, setShowDetail] = useState(false);
    const [passDetail, setPassDetail] = useState(null);
    const [showcart ,setshowcart]=useState(false);
    const[data,setdata]=useState(null);
    
    return (
        <div>
            <div className='bg-emerald-300 bg-opacity-60 w-full h-96 -mt-10'>
                <img
                    className=' mt-10 ml-40 w-3/4 h-96 rounded-xl box-border'
                    src={banner.image}
                    alt=''
                />
                <h3 className='absolute ml-48 -mt-80 font-extralight text-3xl text-opacity-80 text-green-900'>
                    {banner.notice}
                </h3>
                <h2 className='absolute ml-64 -mt-52 text-5xl font-bold text-opacity-80 text-pink-900'>
                    {banner.offer}
                </h2>
            </div>
            <div className='bg-emerald-300 bg-opacity-60 w-full h-20'></div>
<userAuth.Provider value={{setPassDetail,showDetail,passDetail}}>
            <div className='mt-10 ml-20 grid grid-cols-2 md:grid-cols-4 gap-4 mr-10'>
                {pages.length > 0 ? (
                    pages.map((detail, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setShowDetail(true);
                                setPassDetail(detail);
                                setshowcart(false);
                            }}
                            className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white bg-opacity-70 dark:border-emerald-100 shadow-black hover:shadow-amber-400'
                        >
                            <img className='p-8 rounded-t-lg w-full h-96' src={detail.image} alt={detail.name} />
                            <div className='px-5 pb-5'>
                                <div className='flex'>
                                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 font-serif'>
                                        {detail.name}
                                    </h5>
                                    <FaHeart className='text-red-700 mt-1 ml-10' />
                                    <FaHeart className='text-red-700 mt-1 ml-2' />
                                    <FaHeart className='text-red-700 mt-1 ml-2' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-3xl font-bold text-pink-900'>{detail.price}.00</span>
                                    <button
                                     className='mt-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                                     onClick={() => {

                                       
                                        setdata(detail);
                                        setshowcart(true);
                                        setShowDetail(false);
                                    }}>
                                    
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Not available</p>
                )}
            </div>

            {showDetail && passDetail && (
                <Buynow showDetail={showDetail} passDetail={passDetail} />
            )}
</userAuth.Provider>

        </div>
    );
}

export default Card;
