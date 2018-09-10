import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe';
import { getRecipes } from '../../recipe-service';

import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      needUpdate: false,
    };
  }

  componentDidMount() {
    getRecipes().then((item) => {
      this.setState({ recipes: item });
    });
  }

  updateData = () => {
    console.log('1', this.state.needUpdate)
    this.setState(() => ({
      needUpdate: !this.state.needUpdate,
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
