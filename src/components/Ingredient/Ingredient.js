import React from 'react';
import styles from './styles.css';

const Ingredient = (props) => {
  const { ingredient } = props;
  return (
    <div>
      <span>{ingredient.name}</span>
      <span className={styles.right}>{ingredient.quantity}</span>
    </div>
  );
};

export default Ingredient;
