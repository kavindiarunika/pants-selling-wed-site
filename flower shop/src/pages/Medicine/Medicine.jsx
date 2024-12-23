import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHreader/SubHeader';
import { banner } from './MedicineDetail';
import { Medicarddetail } from './MedicineDetail';
import { useState } from 'react';
import Card from '../../components/Card/Card';



const Medicine = () => {

return(
        <div className='bg-gradient-to-r from-green-800 ...'>
            <Header />
            <SubHeader page={Medicarddetail} />
            <Card banner={banner} pages={Medicarddetail}/>
            <Footer className='w-full h-24 mt-10' />

        </div>
    )
}
export default Medicine