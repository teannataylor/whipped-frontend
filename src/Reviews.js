import React from 'react'
// import ReviewDetails from 'react'
// import { Route,Routes} from "react-router-dom";

//display reviews that are assigned to each recipe
// need to style the bottom --- if i have type go ahead and style a footer

//review container
function Reviews({review}) {

  
 
  return (
    <div className='border-dashed border-2 border-pink-400 py-4 mx-8 hover:shadow-lg hover:shadow-black/30 text-center'>
      <h1>Review:</h1>
      <br/>
      <h2>{review.comment}</h2>
      <br/>
      <h2>Stars:{review.stars}</h2>
      <br/>
  </div>
  )
}

export default Reviews