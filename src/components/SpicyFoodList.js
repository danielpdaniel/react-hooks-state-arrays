import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newArray = [...foods, newFood]
    setFoods(newArray)
    console.log(newFood);
  }

  function handleLiClick(id){
    const filteredFood = foods.map(food => {
      if (food.id === id){
        food.heatLevel+= 1;
      }
      return food
    })
    setFoods(filteredFood)
  }

  function handleSubmit(event){
    const selectedCuisine = event.target.value;
   
    const matchingCuisines = foods.filter(food => food.cuisine === selectedCuisine)
    setFoods(matchingCuisines)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleSubmit}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

    </div>
  );
}

export default SpicyFoodList;
