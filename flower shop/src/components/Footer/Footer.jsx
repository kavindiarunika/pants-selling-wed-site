import React from 'react';

import Homepage from '../../assets/assests';

const Footer = () =>{
    return(
        <div className=''>
            

<footer class="bg-slate-900 bg-opacity-50 w-full mt-10 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
             
                  <img src={Homepage.logo} class="h-40 me-3" alt=" " />
                  <span class="self-center text-1xl font-semibold whitespace-nowrap dark:text-white mt-3 ml-16">Camelia plant shop</span>
             
          </div>
          <div class="grid grid-cols-4 gap-4 sm:gap-6 sm:grid-cols-4">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resorces</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">home</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">About us</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="mt-4 hover:underline ">Contack us</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Help</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">facebook</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Twitter</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">tiktok</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023  All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  
                  <span class="sr-only">Twitter page</span>
              </a>
             
              
          </div>
          <div className='float-right '>
          <img className='relative z-10 opacity-40 -mt-40 -mr-96' src ={Homepage.footer } alt=''/>
            
          </div>
      </div>
    </div>
</footer>

        </div>
    )
}
export default Footer