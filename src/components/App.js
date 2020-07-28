import React, { useState } from 'react';
import './App.css';
import foods from '../foods.json';

import FoodList from './FoodList';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const [todaysCalories, setTodaysCalories] = useState(0);
  const [todaysFoods, setTodaysFoods] = useState([]);

  function filterFoods(term) {
    if (!term) {
      return setFoodList([...foods]);
    }

    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(term.toLowerCase());
    });

    return setFoodList([...filtered]);
  }

  function addFood(food) {
    const updatedFoods = [...todaysFoods, food];

    setTodaysFoods([...updatedFoods]);
    return setTodaysCalories(
      (prevState) => prevState + food.calories * food.quantity
    );
  }
  return (
    <div>
      <FoodList FoodBoxfoodList={foodList} addFood={addFood} />
    </div>
  );
}

export default App;
