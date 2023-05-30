import React from 'react';
import NavBar from './NavBar';

function About() {
  return (
    <div>
      <NavBar/>
      <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The<span className='text-pink-400 italic font-serif'> Sweetest</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span>Dessert</span> Recipes</h1>
          </div>
          <img className='w-full max-h-[400px] object-cover' src="https://skyticket.com/guide/wp-content/uploads/2020/10/shutterstock_1397535650-1.jpg" alt="/"/>
      </div>
  </div>
    <div>
      <h1 className='text-center text-pink-400 font-bold font-serif'> What is Whipped?</h1>

      <p className='font-serif text-center'>
        Whipped is your melting pot of sweet dessert recipes. These recipes are from all over and there's always one for the perfect occasion. 
        Some recipes are classics while the others offer a modern spin. 
      </p>
    </div>
  </div>
  )
}

export default About