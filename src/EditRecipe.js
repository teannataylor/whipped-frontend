import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';


//POST request works
function EditRecipe({onRecipeUpdate}) {
  
   const {id} = useParams();
   const [currentData, setCurrentData] = useState("")

    useEffect(() =>{
        fetch(`http://localhost:9292/recipes/${id}`)
        .then(r => r.json())
        .then(data => {
            setCurrentData(data)
        })


    }, [])

   function handleSubmit(e) {
    e.preventDefault();
        fetch(`http://localhost:9292/recipes/${id}`,{
            method: "PATCH",
            headers:{
                "Content-type" : "application/json"
            },

            body: JSON.stringify(currentData)
        }) //go to backend here
            .then(r => {
                console.log(r)
                return r.json()})
            .then((updatedRecipe) =>{
                onRecipeUpdate(updatedRecipe)
            })
   }

   function handleChange(e){
    const key = e.target.name
    setCurrentData({
        ...currentData,
        [key]: e.target.value

    })
   }

  return (
    <div>
        <NavBar/>
         <div className='max-w-[1640px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The<span className='text-pink-400 italic font-serif'> Sweetest</span></h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span>Dessert</span> Recipes</h1>
        </div>
        <img className='w-full max-h-[400px] object-cover' src="https://images5.alphacoders.com/319/319214.jpg" alt="/"/>
    </div>
</div>
        
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.name}
        type="text"
        name="name"
        placeholder="Recipe name"
      />
          <input
          className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.cook_time}
        type="text"
        name="cook_time"
        placeholder="Recipe Cook Time"
      />
    
    <input
    className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.ingredients}
        type="text"
        name="ingredients"
        placeholder="Recipe Ingredients"
      />
    
    <input
    className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.description}
        type="text"
        name="description"
        placeholder="Recipe Description"
      />
    
    <input
    className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.instructions}
        type="text"
        name="instructions"
        placeholder="Recipe Instructions"
      />
    <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.image}
        type="text"
        name="image"
        placeholder="Image URL"
      /> 
   <div className="dropdown">
    <label>
    <select className='form-select' name="dessert_id" value={currentData.dessert_id} onChange={handleChange}>
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
    
    <div>
    <button  type="submit">Save Edit</button>
    </div>
    </form>


    </div>
  )
}

export default EditRecipe