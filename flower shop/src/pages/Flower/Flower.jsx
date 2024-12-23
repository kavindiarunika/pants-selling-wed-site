import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHreader/SubHeader';
import { Flowercarddetail } from './FlowerDetail';
import { banner } from './FlowerDetail';
import Card from '../../components/Card/Card';


const Flower = () => {
    return (
        <div className='bg-gradient-to-r from-green-800 ...'>
            <Header />
            <SubHeader page={Flowercarddetail} />
            <Card banner={banner} pages={Flowercarddetail}/>
          
            <Footer className='w-full h-24 mt-10' />

        </div>
    )
}
export default Flower