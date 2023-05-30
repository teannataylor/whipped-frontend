import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

// this should POST a new review under each Recipe; will also need a state for this?
function NewReview ({addReview}){
const {id} = useParams()

const defaultForm = {
  stars: 0,
  comment: "",
  recipe_id: id

}

// fetch('http://localhost:9292/reviews')
// .then(response => response.json())
// .then(data => {
//   console.log(data, 'hejejhehe');
//   // Use the data here
// })


const [formState, setFormState] = useState(defaultForm)

function handleChange(e) {
  const key = e.target.name;
  setFormState((prevState) => ({ ...prevState, [key]: e.target.value }));
}


// The dropdown for Dessert ID
function handleValue(e){
   const key= e.target.name;
  setFormState((prevState) => ({...prevState, [key]: e.target.value}))
}

const handleSubmit = (e) =>{
 //prevents default form behavior
 e.preventDefault();


 const config = {
  method: "POST",
  headers: {
    //indicates to the server that the request body contains JSON data
    "Content-Type": "application/json",
    Accepts: "application/json",
  },
  //this takes the formState data and turns it into stringdata since you can only send strings(?) across the internet
  body: JSON.stringify(formState),
};

fetch(`http://localhost:9292/reviews`, config)
  .then(res => res.json()) //parses the data/response once it is resolved  into consumable JSON
  .then(data => {addReview(data)}); //2nd promise rec'vs the data and is used to set state
}
// debugger


// .then((r) => r.json())
// .then((newReview) => {
//   const updatedRecipes = recipes.map((recipe)=>{
//     if (recipe.id === newReview.recipe_id){
//       return {...recipe, reviews:[...recipe.reviews,newReview]}
//     } else {

//       return recipe
//     }

//     setRecipes(updatedRecipes)
//   })


// })



  return (
    <div>
      Submit a Review:
<form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={formState.comment}
        type="text"
        name="comment"
        placeholder="Type your Review...."
      />
   <div className="dropdown">
    <label>
      <h1>Leave a ☆ Rating</h1>
      <br/>
    <select className='form-select border border-pink-500 rounded-xl px-5 py-1' name="stars" value={formState.stars} onChange={handleValue}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>

    </select>
    </label>
   </div>
   <br/>
   <button className='items-center' type="submit">Submit Review</button>
      </form>
        
    </div>
  )
}

export default NewReview