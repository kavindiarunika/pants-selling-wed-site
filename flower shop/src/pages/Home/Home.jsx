import Homepage from "../../assets/assests";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import { myOffer,mySelection,popularToday } from "./Detail";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();
  
const handlespecial =() =>{
    const scroll = document.getElementById("special-selection");
    scroll.scrollIntoView({behavior: "smooth"});
}

const handleFlowerPage =(name)=>{
  if(name == "flower plants"){
    navigate('/Flower')
  }
  else if (name == "fruit plants"){
    navigate('./Fruit')
  }
  else if(name == "vegetable plants"){
    navigate('/Vegetable')
  }
  else if(name =="medecine plants"){
    navigate('/Medicine')
  }

};

    return (
        <div className="bg-gradient-to-r from-green-950 ...">
        <div style={{ backgroundImage: `url(${Homepage.home})` ,backgroundSize:"cover" }}>
            <Header  />
            
            <div className=" relative ml-24 mt-52 tracking-widest mb-12 ">
                <p className="text-green-950 font-bold text-6xl -tracking-tighter font-sans"><span>Buy Plant...<br/>Protect Nature...</span></p>
                <p className="text-green-600 ml-56 mt-6 opacity-70 text-xl">welcome to Camelia palnt shop.Buy your green life</p>
                <div className="flex mt-6 ml-20">
                <button className="text-white text-lg ml-60 mb-80 opacity-90 bg-red-600 p-3 w-32 rounded-2xl hover:bg-red-700" onClick={handlespecial}>Buy Now</button>
                <FaAngleDoubleRight className=" mt-2 size-11"/>
                </div>
        </div>
        <p className=" float-right -mt-80 rotate-90 text-black text-lg opacity-65" >Camelia Plant Shop (pvT) ltd.</p>

        
        </div>
        
<div className=" relative z-20 flex gap-20 origin-center ">
    {myOffer.map((offer,index)=>(
        <div key={index}
        style={{backgroundImage :`url(${offer.image})`}} class=" transition duration-150 ease-out hover:ease-in -mt-36 w-1/4 h-64 ml-10 max-w-sm p-6 bg-green-800  border-gray-200 rounded-lg  dark:border-yellow-300 border-8 origin-center active:origin-top">
   
        <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{offer.desc}</h5>

    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more</a>
        <MdLocalOffer className=" text-8xl text-green-800 ml-80 mt-10" />

</div>

    ))}
     </div>
    
     <div className="mt-52">
     <hr className="-mb-16"/>
     <div className="flex items-center ml-96">
   <GiThreeLeaves className="text-6xl items-center ml-52 text-green-950 " />
       <p className="text-center text-4xl text-black border-green-950 font-bold">Select catogery</p>
       <GiThreeLeaves className="text-6xl text-green-950" />
       </div>
    <div className="relative flex z-10 w-full h-auto bg-gradient-to-b   mt-1 gap-14">
        
        {mySelection .map((selection,index)=>(
            <div key={index} 
            className="ml-40 ">
                <img  onClick={()=>handleFlowerPage(selection.name)} className="w-28 h-28 rounded-full mt-20 border-y-green-950 border-8 cursor-pointer hover:border-green-500"src={selection.image} alt=''/>
                <h3  onClick={()=>handleFlowerPage(selection.name)}className="text-2xl cursor-pointer text-black mt-5 hover:underline hover:underline-offset-8 hover:text-green-600">{selection.name}</h3>

                </div>
        ))}
        
        </div>
   </div>
    <div className=" relative z-10 mt-52" id="special-selection">
   <hr className="-mb-16"/>
         <div className="flex items-center ml-96">
            <GiThreeLeaves className="text-6xl items-center ml-52 text-green-900 " />
            <p className=" text-center text-4xl font-bold text-black">Popular Today</p>
            <GiThreeLeaves className="text-6xl text-green-900" />
         </div>
       <div className="">
           <div className="mt-10 ml-20 grid grid-cols-2 md:grid-cols-4 gap-4 mr-20 ">
             {popularToday.map((popular,index)=>(
                 <div key={index}
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl shadow-black transition-transform duration-300 active:scale-110">
                         <img class="rounded-t-lg w-full h-72" src={popular.image} alt="" />
            
                   <div class="p-5">
                         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{popular.name}</h5>
                         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{popular.desc}</p>
                <div className="bg-green-500 w-full h-10 mb-5 rounded-xl opacity-40 text-center text-4xl m-0">
                    <p>{popular.price}</p>
                    </div>
                <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    buy now</button>
               </div>
            </div>

            ))}
            
</div>

         </div>
       <Footer  className='w-full h-24 mt-10'/>
   </div>

  
</div>

)};

export default Home;
