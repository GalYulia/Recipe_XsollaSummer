import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PreviewRecipe from './PreviewRecipe';
import { getRecipes } from '../recipe-service';
import styles from '../styles/buttons.css';
import list from '../styles/list.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    getRecipes().then((item) => {
      this.setState({ recipes: item });
    });
  }

  render() {
    const { recipes } = this.state;
    const recipeElements = recipes.map(recipe => <li key={recipe.id}><PreviewRecipe recipe={recipe} /></li>);

    return (
      <div className={list.list}>
        <Link className={styles.button} to="/recipe">Create recipe</Link>
        <ul className={list.ul}>
          {recipeElements}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
