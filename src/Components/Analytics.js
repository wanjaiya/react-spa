import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt='laptop' className='w-[500px] mx-auto my-4'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] uppercase font-bold'> Data Analytics Dashboard</p>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'> Manage Data Analytics Centrally</h1>
          <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum, quisquam cumque magni repellat corrupti. 
            Quos laborum eius corrupti, unde magnam mollitia voluptate aliquid nulla ratione, reiciendis officiis cumque ipsum.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics