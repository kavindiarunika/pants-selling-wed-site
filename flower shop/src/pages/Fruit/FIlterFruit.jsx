import React from 'react';
import { useParams } from 'react-router-dom';
import { Fruitcarddetail } from './FruitDetail';
import {useNavigate} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
 

function FilterFruit() {
  const navigate = useNavigate();

  const handleBack=() =>{
       navigate('/Fruit');
  }
  const { type } = useParams(); 
  

  
  const filteredData = Fruitcarddetail.filter((detail) => detail.type === type);

  return (
    <div className='bg-gradient-to-r from-green-950 ...'>
      <Header/>
        <div className='flex mt-10 ml-5'>
      <FaArrowLeft onClick={handleBack} className='size-5 mt-3 text-white hover:text-red-800' />
      <p className='text-2xl ml-6 font-bold text-white'>Back</p>
      </div>
      <Filter filteredData={filteredData}/>
      <Footer/>
    
    </div>
  );
}

export default FilterFruit;