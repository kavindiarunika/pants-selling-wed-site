import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHreader/SubHeader';
import { banner } from './FruitDetail';
import { Fruitcarddetail } from './FruitDetail';
import Card from '../../components/Card/Card';



const Fruit = () => {
   return(
        <div className='bg-gradient-to-r from-green-800 ...'>
            <Header />
            <SubHeader page={Fruitcarddetail} />
            <Card banner={banner} pages={Fruitcarddetail}/>
            <Footer className='w-full h-24 mt-10' />

        </div>
    )
}
export default Fruit