import React from 'react'
import {Link} from 'react-router-dom'

//this component creates the recipe card for when fullList is called
export default function MainCard({name,image,id}) {

  // lg:grid-cols-4 grid grid-cols-3 gap-1
  return (
    <div>
    <div className=''>
            <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src={image} alt={name} className='w-full h-[200px] object-cover' />
         <div className='flex justify-between px-2 py-4'> 
       <p className='font-bold font-serif'>{name} </p>
       <Link to={`http://localhost:3000/recipes/`+ id}><button className='font-serif'>Bake</button> </Link>
         </div>
    </div>
    </div>
 </div>
  )
}

// 