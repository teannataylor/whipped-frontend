import React from 'react';
import NavBar from './NavBar';
import Display from './Display';
import TopCards from './TopCards';

import TopRatedDesserts from './TopRatedDesserts';
import BottomCards from './BottomCards';

// import FullList from './FullList';


function Homepage({recipes, setRecipes}) {
    console.log(recipes, 'is this a list')
  
    //map through recipes; [this works because I can see the bottom cards]
   const renderDesserts = recipes.map((recipe) =>
    <BottomCards recipe={recipe} key={recipe.id}/>
   )

// console.log(renderDesserts, 'what does this pull');
  return (
    
    <div>
        <NavBar/>
        <Display/>
        <TopCards recipes={recipes} setRecipes={setRecipes}/>
        <TopRatedDesserts renderDesserts={renderDesserts}/>
        
    </div>
  )
}

export default Homepage

// const renderDesserts = recipes.map((recipe)=>(
//   <BottomCards key={recipe.id} recipe={recipe} />
// ));