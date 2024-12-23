import React from 'react';
import { FaHeart } from "react-icons/fa"; 
import { useState } from 'react';
import Buynow from '../Buynow/Buynow';

function Filter({filteredData}) {

  const [showDetail, setShowDetail] = useState(false);
    const [passDetail, setPassDetail] = useState(null);
    
  
  return (
    <div  className="relative z-50 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
        filteredData.map((detail, index) => (
          <div
            key={index}
            onClick={() => {
              setShowDetail(true);
              setPassDetail(detail);
          }}
          
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white bg-opacity-70 dark:border-emerald-100 shadow-black hover:shadow-amber-400"
          >
            <img
              className="p-8 rounded-t-lg w-full h-96"
              src={detail.image}
              alt={detail.name}
            />
            <div className="px-5 pb-5">
              <div className="flex">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 font-serif">
                  {detail.name}
                </h5>
                <FaHeart className="text-red-700 mt-1 ml-10" />
                <FaHeart className="text-red-700 mt-1 ml-2" />
                <FaHeart className="text-red-700 mt-1 ml-2" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-pink-900">{detail.price}.00</span>
                <button className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg text-center col-span-3">No plants found for "{type}"</p>
      )}
      
      
   
     {showDetail && passDetail && (
      <Buynow showDetail={showDetail} passDetail={passDetail} setPassDetail={setPassDetail} />
  )}
 </div>
  )
}

export default Filter
