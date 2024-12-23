import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHreader/SubHeader';
import { banner } from './VegeDetail';
import { Vegecarddetail } from './VegeDetail';
import Card from '../../components/Card/Card';



const Vegetable = () => {
    
   

    return (
        <div className='bg-gradient-to-r from-green-800 ...'>
            <Header />
            <SubHeader page={Vegecarddetail} />
            <Card banner={banner} pages={Vegecarddetail}/>
           <Footer className='w-full h-24 mt-10' />

        </div>
    )
}
export default Vegetable