

import React, { useState } from "react";

function AddingList() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value.trim();
    if (newFood !== "") {
      setFoods((prevFoods) => [...prevFoods, newFood]);
      document.getElementById("foodInput").value = "";
    }
  }

  function handleRemoveFood(index) {
    setFoods((prevFoods) => prevFoods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => handleRemoveFood(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default AddingList;


