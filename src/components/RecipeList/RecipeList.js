import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe';
import { deleteRecipe, getRecipes } from '../../recipe-service';

import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };

    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    getRecipes().then((item) => {
      this.setState({ recipes: item });
    });
  }

  updateData(id) {
    deleteRecipe(id).then(response =>  getRecipes().then((item) => {
        this.setState({ recipes: item });
    }));
  }


  render() {
    const { recipes } = this.state;
    const recipeElements = recipes.map(recipe => <div key={recipe.id}><PreviewRecipe recipe={recipe} updateData={this.updateData} /></div>);

    return (
      <div className={styles.container}>
        <Link className={globalStyles.button} to="/recipe">
          <label>Создать рецепт</label>
        </Link>
        {recipeElements}
      </div>
    );
  }
}

export default RecipeList;
