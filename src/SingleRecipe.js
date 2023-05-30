import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Reviews from './Reviews'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NewReview from './NewReview';

function SingleRecipe({recipes,setRecipes, addReview}) {

  const {id} = useParams(); // id is a string
  // console.log(useParams(), 'what does this reflect')
  const recipe = recipes.find(r => r.id === parseInt(id))
  // console.log(recipe, 'what is this showing')
  // const [currentRecipe,setCurrentRecipe] = useState({reviews: []})
  const reviews = recipe.reviews.map(r => <Reviews key={r.id} review={r} />)

//need to add a "add review function 
//   useEffect(() => {
//     const oneRecipe = recipes.find(r => r.id === id)
//     setCurrentRecipe(oneRecipe)
//   }, [recipes]
// )

// const addReview = (review) => {
//   const updatedRecipe = {...currentRecipe,review: [...currentRecipe.reviews, review]}
//   setCurrentRecipe(updatedRecipe)
// } 
  



  function deleteRecipe() {
      fetch("http://localhost:9292/recipes/" + id,{
        method: "DELETE",
      })
      setRecipes((currentListing)=> currentListing.filter((recipes) => recipes.id !== id)) 
    }

    function editRecipe(){
    }  

     
  // const {name, cook_time,ingredients, description,instructions,image, dessert_id} = recipe
  //map through recipe reviews in a different component
  // const recipesList = recipes.map(())
    if(!recipe){
      return <h1>loading</h1>
    }
  return (
    <div>
      <NavBar/>
      <div className=''>
  <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The<span className='text-pink-400 italic font-serif'> Sweetest</span></h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span>Dessert</span> Recipes</h1>
        </div>
        <img className='w-full max-h-[400px] object-cover' src="https://t4.ftcdn.net/jpg/02/80/18/39/360_F_280183907_jOcpiSjUzBDjtIQUwp7QJrcKRWQoQvHz.jpg" alt="/"/>
    </div>
    <br/>

</div>
     <h1 className='text-center px-4 py-6 text-2xl text-pink-400 italic font-serif '>{recipe.name}</h1>
      <div  >
        <div className='pb-4' >
        <img className='max-h-[300px] max-w-[400px] mx-auto items-center rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30' src= {recipe.image} alt="/"/>
        </div>
        <br/>
        <div className='text-center py-1 text-pink-400 font-serif'>
      <NewReview id={id} addReview={addReview}/>
    </div>
    <br/>
        <div className='border-dashed border-2 border-pink-400 py-4 mx-8 hover:shadow-lg hover:shadow-black/30'>
        <div className='text-center py-1 text-pink-400 font-serif'> Estimated Cook Time: </div>
         <div className='text-center pb-4 font-serif'>{recipe.cook_time}</div> 
        
        <div className='text-center py-1 text-pink-400 font-serif'> Ingredients:</div>
        <div className='text-center pb-4  px-2 font-serif'>{recipe.ingredients}</div>
        <div className='text-center py-1 text-pink-400 font-serif'> Description:</div>
        <div className='text-center pb-4 px-2 font-serif'>{recipe.description}</div>
        <div className='text-center py-1 text-pink-400 font-serif'> Instructions:   </div>
        <div className='text-center pb-4  px-2 font-serif'>{recipe.instructions}</div>
        <div className='items-center px-4 mx-auto'><Link to= {`http://localhost:3000/recipes/`+ id +'/edit' }><button onClick={editRecipe}>Edit</button></Link></div>
        <div className='items-center px-4 py-1 mx-auto'><button onClick={deleteRecipe}>Delete</button></div>
        </div>
      </div>
    
      <br/>
      <br/>
      <div className='justify-center'>
       {reviews} </div>
   </div>
  )
}

//needs to include an edit recipe button
//display reviews here too
export default SingleRecipe

// t.string "name"
// t.string "cook_time"
// t.string "ingredients"
// t.string "description"
// t.text "instructions"
// t.string "image"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.integer "dessert_id"