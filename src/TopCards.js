import React, {useState} from 'react';
// import { Link } from 'react-router-dom';



function TopCards({recipes}) {
    const [filterValue, setFilterValue] = useState(0);

    console.log(recipes, 'hello i passed this in top')
    // these buttons don't work as of right now; just styling
  
   return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Feeling Thirsty?</p>
  {/* <button onClick={()=> setFilterValue(recipes.filter((recipe) => { return recipe.dessert_id === 3 }))} className='border-white bg-white text-pink-400 mx-2 absolute bottom-4'>Random</button> */}
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.pexels.com/photos/6119123/pexels-photo-6119123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='/'
        />
    </div>
    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Milk's Best Friend:</p>
  {/* <button onClick={() => console.log('hello')} className='border-white bg-white text-pink-400 mx-2 absolute bottom-4'>Random</button> */}
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.pexels.com/photos/2372528/pexels-photo-2372528.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='/'
        />
    </div>
    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Roll That Dough!</p>
   {/* <button OnClick={() => console.log('hello')} className='border-white bg-white text-pink-400 mx-2 absolute bottom-4'>Random</button> */}
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='/'
        />
    </div>
</div>
  )
}

export default TopCards