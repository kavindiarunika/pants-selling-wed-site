import React, { useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { Flowercarddetail } from '../../pages/Flower/FlowerDetail';
import {Fruitcarddetail} from '../../pages/Fruit/FruitDetail';
import {Vegecarddetail} from '../../pages/Vegetable/VegeDetail';
import {Medicarddetail} from '../../pages/Medicine/MedicineDetail'

function SubHeader({ page }) {
  const [isFilter, setIsFilter] = useState(false);
  const navigate = useNavigate();
  console.log(page)
  


  // Extract unique plant types
  const type = page ? page.map((item) => item.type) : [];
  const Arraytype = [...new Set(type)];


    const handleFilterSelection = (detail) => {
      // Compare page with the actual Flowercarddetail object
      if(page === Fruitcarddetail) {
        setIsFilter(false);
        navigate(`/FilterFruit/${detail}`);
      }
      else if(page === Flowercarddetail) {
        setIsFilter(false);
        navigate(`/FilterFlower/${detail}`);
      }
      
      else if(page === Vegecarddetail) {
        setIsFilter(false);
        navigate(`/FilterVege/${detail}`);
      }
      else if(page === Medicarddetail) {
        setIsFilter(false);
        navigate(`/FilterMedicine/${detail}`);
      }
    };
    

   
  

  return (
    <div className=" flex w-full h-44 bg-emerald-300 bg-opacity-60">
      {/* Navigation Links */}
      <div className="flex mt-20">
        <ul className="flex list-none gap-36 ml-40">
          <Link to="/Flower"><li className="text-black font-bold text-xl hover:underline cursor-pointer">Flower Plants</li></Link>
          <Link to="/Fruit"><li className="text-black font-bold text-xl hover:underline cursor-pointer">Fruit Plants</li></Link>
          <Link to="/Vegetable"><li className="text-black font-bold text-xl hover:underline cursor-pointer">Vegetable Plants</li></Link>
          <Link to="/Medicine"><li className="text-black font-bold text-xl hover:underline cursor-pointer">Medicine Plants</li></Link>
        </ul>
      </div>

      {/* Filter and Settings */}
      <div className="relative flex mt-20 ml-36 gap-16">
        <FaFilter
          onClick={() => setIsFilter(!isFilter)}
          className="cursor-pointer text-lg"
        />

        {/* Filter Modal */}
        {isFilter && (
          <div className="absolute top-10 right-0 bg-lime-600 bg-opacity-60 text-black p-4 w-72 shadow-lg rounded">
            <div className="flex">
              <FaArrowLeft
                onClick={() => setIsFilter(false)}
                className="mt-2 text-red-600 cursor-pointer"
              />
              <h1 className="text-lg font-bold mb-2 ml-4">Filter</h1>
            </div>

            <p className="text-sm">Select Plant Type:</p>
            <hr className="mt-2" />
            <div className="mt-2">
              {Arraytype.length > 0 ? (
                Arraytype.map((detail, index) => (
                  <div key={index} className="py-1">
                    <input
                      type="radio"
                      name="filter"
                      className="size-4 mt-2 ml-2"
                      onChange={() => handleFilterSelection(detail)}
                    />
                    <label className="ml-3">{detail}</label>
                  </div>
                ))
              ) : (
                <p>No types available</p>
              )}
            </div>
          </div>
        )}

        <IoIosSettings className="text-3xl cursor-pointer -mt-2" />
      </div>
    </div>
  );
}

export default SubHeader;
