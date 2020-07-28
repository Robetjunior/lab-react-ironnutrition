import React from 'react';
import FoodBox from './FoodBox';

function FoodList(props) {
  return (
    <div>
      {props.foodList.map((food) => {
        return (
          <FoodBox
            name={food.name}
            calories={food.calories}
            quantity={food.quantity}
            image={food.image}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
