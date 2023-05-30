// import React, {useState} from 'react'

// function ToggleButtons({recipes, setRecipes}) {
//   const [buttonState, setButtonState] = useState({
//     button1: false,
//     button2: false,
//     button3: false,
//     button4: false,
//     button5: false,
//     button6: false
  
//   })

//    const toggledButtons = (buttonId) => {
//     setButtonState((prevState) => ({
//       ...prevState, 
//       [buttonId] : !prevState[buttonId]
//     }))

//    }

//    const filteredRecipes = recipes.filter((recipe) => {
//     if (buttonState.button2 && recipe.dessert_id === 1){
//       return true;
//     }
//    })
//     //needs to be a state for the filter of the recipes?
//     // is this condition true ? yes : no
//   //   <button onClick={() => toggleButton('button1')}>
//   //   {buttonStatus.button1 ? 'Button 1: On' : 'Button 1: Off'}
//   // </button>
//   return (
//     <div>
//         <h1 className='font-bold text-pink-400 text-2xl text-center'> ♥ Our Favorites ♥</h1>

 
//         <div className='flex flex-col lg:flex-row justify-between'>
       
//             <div>
//                 <p className='font-bold text-gray-700 px-4'>Filter Type</p>
//                 <div className='flex justify-between flex-wrap px-4'>
//                 <button className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white' >All</button>

//                 <button className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white' onClick={()=> toggledButtons('button1')}>
//                   {buttonState.button1 ? 'Button 1: on' :
                  
                  
//                   (recipes.filter((dessert) => { return dessert.dessert_id === 1 }))}  
//                 Cake
//                 </button>


//                 <button onClick={()=> setButtonState(recipes.filter((dessert) => {return dessert.dessert_id === 2;}))}  
//                 className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Muffins</button>

//                 <button onClick={()=> setButtonState(recipes.filter((dessert) => {
//                   return dessert.dessert_id === 3;
//                 } )

//                 )}  className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Cookies</button>
//                 <button onClick={()=> setButtonState(recipes.filter((dessert) => {
//                   return dessert.dessert_id === 4;
//                 } )
//                 )} className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Savory</button>
//                 <button onClick={()=> setButtonState(recipes.filter((dessert) => {
//                   return dessert.dessert_id === 5;
//                 } )

//                 )}  className='m-1 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white'>Drinks</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ToggleButtons