import React from 'react'
import NavBar from './NavBar'
import Display from './Display'
import MainCard from './MainCard'


function FullList({recipes,setRecipes}) {

  console.log(recipes, 'full list working or nah')
//when new recipes are added, they should appear on this list
// const [recipes, setRecipes] = useState([]);
// const [query, setQuery] = useState("");

  // useEffect(fetchRecipes, []);

  // function fetchRecipes() {
  //   fetch("http://localhost:9292/recipes")
  //     .then((res) => res.json())
  //     .then((data) => setRecipes(data))
  // };




  console.log(recipes, 'this should be a full array')
  return (
    <div>
      <NavBar/>
      <Display/>
      <div>

      </div>
      <div className='grid grid-cols md:grid-cols-4 gap-6 pt-2 px-2'>
      {recipes.map((recipe)=>{
        return <MainCard key={recipe.id} name={recipe.name} image={recipe.image} id={recipe.id}/>
})}
</div>
      </div>
  )
}

export default FullList


// t.string "name"
// t.string "cook_time"
// t.string "ingredients"
// t.string "description"
// t.text "instructions"
// t.string "image"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.integer "dessert_id"