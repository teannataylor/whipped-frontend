import React from 'react'

//add a edit function?
function ReviewDetails({review = {}}) {
  const {id, stars, comment} = review;

  return (
    <div>ReviewDetails
<ul className="grid sm:grid-cols-3">
   
      </ul>
    </div>
  )
}

export default ReviewDetails