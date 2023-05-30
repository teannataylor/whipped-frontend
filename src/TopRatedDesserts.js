import React from 'react'

//TopRatedDesserts Styling // changed to Author's Favorites


function TopRatedDesserts({renderDesserts}) {
    console.log(renderDesserts, 'did i pass this correctly?') // can we get this to show only the first  6 in the array?
    const sortedRecipes = renderDesserts.sort((a,b) => b.reviews - a.reviews)
    const topEightRecipes = sortedRecipes.slice(0,8)
    console.log(topEightRecipes, 'what the')

  //   const sortedObjects = objects.sort((a, b) => b.reviews - a.reviews);

  // // Extracting the top 5 objects
  // const topFiveObjects = sortedObjects.slice(0, 5);

    return (
      <div>
       <h1 className='font-bold text-pink-400 text-2xl text-center'> ♥ Our Favorites ♥</h1>
      <ul className='grid grid-cols-3 lg:grid-cols-4 gap-6 pt-4 px-4'>{topEightRecipes}</ul>
      </div>
    
    )
}

export default TopRatedDesserts