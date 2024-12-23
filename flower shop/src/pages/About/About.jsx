import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { aboutdetail } from './AboutDetail'

function About() {
  return (
    <div className="bg-gradient-to-r from-green-950 ...">
        <Header/>
        <div className='mt-40'>
        {aboutdetail.map((datail,index)=>(
            <div key={index} className='mt-10 ml-52  bg-slate-900  flex h-60 w-2/3 shadow-red-500 box-border rounded-2xl'>
                <div className='w-auto h-full '>
                 <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={datail.image} alt=""/>
                 </div>
                 <div class=" justify-between p-4 leading-normal">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{datail.head}</h5>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{datail.Para}</p>
            </div>
          </div>
        ))}
        </div>
        <Footer/>
      
    </div>
  )
}


export default About
