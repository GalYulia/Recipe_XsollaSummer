import React from 'react';

const Ingredient = (props) => {
  const { ingredient } = props;
  return (
    <div>
      <span>{ingredient.name}</span>
      <span>{ingredient.quantity}</span>
    </div>
  );
};

export default Ingredient;
