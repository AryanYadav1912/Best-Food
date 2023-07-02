import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Cards 1*/}
            <div className='rounded-xl relative'>
        {/*Overlays */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO</p>
                <p className='px-2'>Through 8/26</p>
                <button className='bg-white text-black hover:bg-red-500 hover:border-red-500 hover:text-white mx-2 absolute bottom-4'>
                    Order Now
                </button>

            </div>
            <img   
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="/" />
        </div>
         {/*Cards 2*/}
         <div className='rounded-xl relative'>
        {/*Overlays */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants </p>
                <p className='px-2'>Added Daily</p>
                <button className='bg-white text-black hover:bg-red-500 hover:border-red-500 hover:text-white mx-2 absolute bottom-4'>
                    Order Now
                </button>

            </div>
            <img   
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
         {/*Cards 3*/}
         <div className='rounded-xl relative'>
        {/*Overlays */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Pizza's</p>
                <p className='px-2'>As you like</p>
                <button className= 'bg-white text-black hover:bg-red-500 hover:border-red-500 hover:text-white mx-2 absolute bottom-4'>
                    Order Now
                </button>

            </div>
            <img   
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="/" />
        </div>

    </div>
  )
}

export default HeadlineCards