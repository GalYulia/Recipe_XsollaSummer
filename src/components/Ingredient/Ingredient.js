import React from 'react';
import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';

const Ingredient = (props) => {
  const selectedClass = props.isSelected ? styles.selected : styles.nonSelected;
  const { ingredient } = props;
  return (
    <div className={selectedClass}>
      <div className={globalStyles.row}>
        <div className={globalStyles.col75}>
          <label>{ingredient.name}</label>
        </div>
        <div className={globalStyles.col25}>
          <label>{ingredient.quantity}</label>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
