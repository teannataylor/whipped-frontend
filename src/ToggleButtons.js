import React from 'react'

function ToggleButtons({recipes, setRecipes}) {
   
    //needs to be a state for the filter of the recipes?
  return (
    <div>
        <h1 className='font-bold text-pink-400 text-4xl text-center'> Top Rated Recipes</h1>

 
        <div className='flex flex-col lg:flex-row justify-between'>
       
            <div>
                <p className='font-bold text-gray-700 px-4'>Filter Type</p>
                <div className='flex justify-between flex-wrap px-4'>
                <button className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white' >All</button>

                <button onClick={()=> setRecipes(recipes.filter((dessert) => { return dessert.dessert_id === 1 }))}  
                className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Cake</button>


                <button onClick={()=> setRecipes(recipes.filter((dessert) => {return dessert.dessert_id === 2;}))}  
                className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Muffins</button>

                <button onClick={()=> setRecipes(recipes.filter((dessert) => {
                  return dessert.dessert_id === 3;
                } )

                )}  className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Cookies</button>
                <button onClick={()=> setRecipes(recipes.filter((dessert) => {
                  return dessert.dessert_id === 4;
                } )
                )} className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Savory</button>
                <button onClick={()=> setRecipes(recipes.filter((dessert) => {
                  return dessert.dessert_id === 5;
                } )

                )}  className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Drinks</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToggleButtons