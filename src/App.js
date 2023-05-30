import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import FullList from "./FullList";
import Form from "./Form";
import SingleRecipe from "./SingleRecipe";
import React, {useState, useEffect} from "react";
import EditRecipe from "./EditRecipe";
import Reviews from "./Reviews";



function App() {
  // Recipes State
  const [recipes, setRecipes] = useState([]);

  //useEffect
  useEffect(fetchRecipes, []);

  //Recipe Fetch Request
  function fetchRecipes() {
    fetch("http://localhost:9292/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
  };

  //recipe update
  function onRecipeUpdate(updatedRecipe){
    setRecipes(recipes.map(
      recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe ))
  }
  

    console.log(recipes)

    function addReview(review){
      const updatedRecipes = recipes.map(recipe => {
        if(recipe.id === review.recipe_id) {
          return {
            ...recipe,
            reviews: [...recipe.reviews,review]
          }
        } else {
          return recipe
        }
      })
      setRecipes(updatedRecipes)
    }
    
  //these links work and so does the fetch request
  return (
    <div className="app">
   {/* <NavBar/> */}
    <Routes>
    <Route path="/" element={<Homepage recipes={recipes} setRecipes={setRecipes}/>}/>
    <Route path="/recipes" element={<FullList recipes={recipes} setRecipes={setRecipes}/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/new" element={<Form recipes={recipes} setRecipes={setRecipes}/>}/> 
    <Route path="/recipes/:id/*" element={<SingleRecipe recipes={recipes} setRecipes={setRecipes} addReview={addReview} />}/>
    <Route path="recipes/:id/edit" element={<EditRecipe onRecipeUpdate={onRecipeUpdate}/>}/>
    <Route path="/review" element={<Reviews/>} />

  
    
    </Routes>
  </div>
  );
}

export default App;
