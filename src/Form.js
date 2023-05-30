import React, {useState} from 'react';
import NavBar from './NavBar';



//add a footer

function Form({setRecipes}) {
  //set keys to empty string 
  const defaultFormData = {
      name: "",
      cook_time: "",
      ingredients:"",
      description: "",
      instructions: "",
      image:"",
      dessert_id: 0, 
  }

  
const [formState, setFormState] = useState(defaultFormData);
 
function handleChange(e) {
  const key = e.target.name;
  setFormState((prevState) => ({ ...prevState, [key]: e.target.value }));
}


// The dropdown for Dessert ID
function handleValue(e){
   const key= e.target.name;
  setFormState((prevState) => ({...prevState, [key]: e.target.value}))
}




function handleSubmit(e) {
  //prevents default form behavior
  e.preventDefault();

  console.log('hello') // make sure button works 

  //configuration object to pass through fetch
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

  //asynchronous; fetch the resource URL, returns a promise
  fetch("http://localhost:9292/recipes", config)
    .then((res) => res.json()) //parses the data/response once it is resolved  into consumable JSON
    .then((newRecipe) => setRecipes((prevState) => [...prevState, newRecipe])); //2nd promise rec'vs the data and is used to set state
}




return (
  <div>
    <NavBar/>
        
    <div className='max-w-[1640px] mx-auto p-4 py-16'>
    <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Submit A<span className= 'italic font-serif'> Sweet</span></h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span>New</span> Recipe</h1>
        </div>
        <img className='w-full max-h-[400px] object-cover' src='https://images.alphacoders.com/107/1072156.jpg' alt=''/>
    </div>
</div>
    <div >

      <div className='px-4 text-4xl italic font-serif font-bold text-center text-pink-400 py-5'>Add a Recipe Below:</div>

    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={formState.name}
        type="text"
        name="name"
        placeholder="Recipe name"
      />
          <input
          className='border m-2 p-2'
        onChange={handleChange}
        value={formState.cook_time}
        type="text"
        name="cook_time"
        placeholder="Recipe Cook Time"
      />
    
    <input
    className='border m-2 p-2'
        onChange={handleChange}
        value={formState.ingredients}
        type="text"
        name="ingredients"
        placeholder="Recipe Ingredients"
      />
    
    <input
    className='border m-2 p-2'
        onChange={handleChange}
        value={formState.description}
        type="text"
        name="description"
        placeholder="Recipe Description"
      />
    
    <input
    className='border m-2 p-2'
        onChange={handleChange}
        value={formState.instructions}
        type="text"
        name="instructions"
        placeholder="Recipe Instructions"
      />
    <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={formState.image}
        type="text"
        name="image"
        placeholder="Image URL"
      /> 
      <br/>

   <div className="dropdown">
    <label>
      <h1>Select A Dessert Type:</h1>
      <br/>
    <select className='form-select' name="dessert_id" value={formState.dessert_id} onChange={handleValue}>
      <option value={1}>Cake</option>
      <option value={2}>Muffins</option>
      <option value={3}>Cookies</option>
      <option value={4}>Savory</option>
      <option value={5}>Drinks</option>
    {/* {options.map((option) => (
      <option
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
    ))} */}
    </select>
    </label>
   </div>
      <br/>
    <div>
    <button className='items-center' type="submit">Add Recipe</button>
    </div>
    </form>
  </div>
  </div>
)
}

export default Form
