import React from 'react';
// import {Link} from "react-router-dom";

export default function Form() {
  return (
    <div className='bg-blue-200 w-screen h-screen flex items-center justify-center'>
        <div className='w-[400px] h-[630px] flex items-center justify-center rounded-xl'>
         <div className='flex flex-col mb-8 gap-9 mt-9'>
         <div className='text-center'>
         <h1 className="text-3xl block text-blue-600 font-bold">Registration</h1>
        </div>
        <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=40&id=24075&format=png" alt="name" className="w-8 h-8 rounded-xl"/>
        <input type="text" placeholder='Type of Vehicle' required className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=40&id=41632&format=png" alt="name" className="w-8 h-8 rounded-xl"/>
        <input type="text" placeholder='Vehicle number' required className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=40&id=52671&format=png" alt="name" className="w-8 h-8 rounded-xl"/>
        <input type="location" placeholder='Location' required className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=40&id=21524&format=png" alt="name" className="w-8 h-8 rounded-xl"/>
        <input type="datetime-local" placeholder='Duration' required className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <button className=" relative cursor-pointer px-6 py-1 text-xl font-semibold text-white border-2 border-blue-800 bg-blue-800 rounded-full transition-transform duration-300 ease-in-out overflow-hidden group w-40 h-12">Submit
       </button> 
        </div>
        </div>

    </div>
  )
}