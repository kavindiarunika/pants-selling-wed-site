import React from 'react'
import Homepage from '../../assets/assests'
import { MdDelete } from "react-icons/md";
import { useCart } from 'react-use-cart';



function Cart() {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,

    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <h1>Your cart is empty</h1>
  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/plant-with-green-leaves-white-background_1275823-3552.jpg')] bg-cover bg-center min-h-96">

      {/*top*/}
      <div className='flex  w-3/5 h-full '>
        <div className=' float-right flex    '>
          <img src={Homepage.logo} className="w-28 h-auto  mt-20" alt='' />
          <div className=''>
            <h1 className='font-mono text-xl ml-10 mt-24 font-bold'>Camelia Flower shop</h1>
            <p className='ml-14 text-m text-slate-700 '>______Protect Nature_____</p>
          </div>
        </div>
      </div>

      {/*bottom card */}
      <h5 className='mt-20 ml-20  text-2xl '>cart:({totalUniqueItems}) total items:({totalItems})</h5>

      {items.map((passDetail, index) => {
        return (

          <div className='mt-20 ml-20 mr-20 '>
            <div className='flex w-full h-32 rounded-xl bg-yellow-600 bg-opacity-30 shadow-sm shadow-black'>
              <img src={passDetail?.image || ""} className='w-auto h-2/3 mt-5 ml-5' alt='' />
              <h1 className='text-xl font-bold ml-16 mt-14'>{passDetail?.name || "sold out"}</h1>
              <p className='ml-52 text-m text-slate-800 mt-14'>QTY 1</p>
              <button
                className='h-8 px-6 bg-blue-600 text-white cursor-pointer rounded-lg  ml-96 mt-14 hover:bg-blue-950'
                onClick={() => {
                  removeItem(passDetail.id);
                  alert("thank you oder with camelia")
                }}>Buy now</button>
              <MdDelete
                className='ml-32 mt-14 size-8 cursor-pointer hover:text-red-700'
                onClick={() => removeItem(passDetail.id)} />
            </div>
          </div>

        )
      })}

      <div className='text-xl mt-20 ml-20 float-right mr-40'>

        <div className=' text-white  '><button onClick={() => emptyCart()} className='py-1 px-10 rounded-2xl bg-red-800 hover:bg-red-900'>Clear cart</button></div>
      </div>

    </div>

  )
}

export default Cart
