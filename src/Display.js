import React from 'react'

//this is the uppder page dispaly
function Display() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The<span className='text-pink-400 italic font-serif'> Sweetest</span></h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span>Dessert</span> Recipes</h1>
        </div>
        <img className='w-full max-h-[400px] object-cover' src="https://images5.alphacoders.com/319/319214.jpg" alt="/"/>
    </div>
</div>
  )
}

export default Display