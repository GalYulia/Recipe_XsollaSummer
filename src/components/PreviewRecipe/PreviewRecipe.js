import React from 'react';
import { Link } from 'react-router-dom';
import IngredientList from '../IngredientList/IngredientList';

import styles from './styles.css';
import button from '../RecipeList/styles.css';


const PreviewRecipe = (props) => {
  const { recipe } = props;
  const body = <section><IngredientList ingredients={recipe.ingredients} /></section>;
  return (
    <div className={styles.container}>
      <span className={styles.name}>{recipe.name}</span>
      <span className={styles.category}>{recipe.category}</span>
      <div>Уровень сложности: {recipe.level}</div>
      {body}
      <Link className={button.button} to={`/recipes/${recipe.id}`}>See more</Link>
    </div>

  );
};


export default PreviewRecipe;
