import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Single} alt="" className='w-20 mx-auto mt-[-3rem] bg-white '/>
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className='text-center text-4xl font-bold'>KES 200</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>100 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                     <p className='py-2 border-b mx-8'>Unlimited Emails</p>
                </div>
                <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>

                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img src={Double} alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent '/>
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className='text-center text-4xl font-bold'>KES 200</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>100 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                     <p className='py-2 border-b mx-8'>Unlimited Emails</p>
                </div>
                <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Triple} alt="" className='w-20 mx-auto mt-[-3rem] bg-white '/>
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className='text-center text-4xl font-bold'>KES 200</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>100 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                     <p className='py-2 border-b mx-8'>Unlimited Emails</p>
                </div>
                <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>
        </div>

    </div>
  )
}

export default Cards