import React from 'react'

//TopRatedDesserts Styling


function TopRatedDesserts({renderDesserts}) {
    console.log(renderDesserts, 'did i pass this correctly?') // can we get this to show only the first  6 in the array?

    return (
      <ul className='grid grid-cols-3 lg:grid-cols-4 gap-6 pt-4 px-4'>{renderDesserts}</ul>
    
    )
}

export default TopRatedDesserts