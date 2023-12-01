import React from 'react'

function NewsLetter() {
  return (
    <div className='full text-white py-16'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-col-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Want tips & tricks to optimize your flow</h1>
                <p> Sign uo to our newsletter and stay up to date</p>
            </div>
            <div className="my-4">
               <div>
                <input type='text' className='' placeholder='Enter Email'/>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Contact Me</button>
               </div>

            </div>
        </div>


    </div>
  )
}

export default NewsLetter