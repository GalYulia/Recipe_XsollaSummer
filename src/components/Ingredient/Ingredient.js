import React from 'react';
import globalStyles from '../../styles/globalStyles.css';

const Ingredient = (props) => {
  const { ingredient } = props;
  return (
    <div className={globalStyles.row}>
      <div className={globalStyles.col75}>
        <label>{ingredient.name}</label>
      </div>
      <div className={globalStyles.col25}>
        <label>{ingredient.quantity}</label>
      </div>
    </div>
  );
};

export default Ingredient;
