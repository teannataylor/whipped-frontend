import React from 'react'
import { Link } from "react-router-dom";

// import SingleRecipe from './SingleRecipe'

// import TopRatedDesserts from './TopRatedDesserts'
// this should pull the mapped data?


//this will hold the styling of each bottom card
function BottomCards({recipe}) {
    // console.log(renderDesserts, 'bottom cards')
    console.log(recipe, 'bottom cards')
    // const [componentShown, setComponentShown] = useState(false)

  
  return (
    <div>
    <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src={recipe.image} alt={recipe.name} className='w-full h-[200px] object-cover' />
         <div className='flex justify-between px-2 py-4'> 
       <p className='font-bold font-serif'>{recipe.name} </p>
       <Link to={`http://localhost:3000/recipes/`+ recipe.id}><button className='font-serif'>Bake</button></Link> 
    
         </div>
 </div>
 </div> 
  )
}

// function UserManagement() {
//   const [compIsShown, setCompIsShown] = useState(false);

//   return (
//      // Whatever else you're rendering.
//      <button onClick={() => setCompIsShown(true)}>...</button>
//      {compIsShown && <OtherComp />}
//   )
// }setComponentShown(true)

export default BottomCards