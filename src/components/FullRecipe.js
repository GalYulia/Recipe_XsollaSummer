import React, { Component } from 'react';
import { getRecipeById, updateRecipe } from '../recipe-service';
import IngredientInfo from './IngredientInfo';

class FullRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeLevel = this.handleChangeLevel.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    getRecipeById(id).then((item) => {
      this.setState({ recipe: item /* , value: item.name */});
    });
  }

  handleChangeName(event) {
    const inputValue = event.target.value;
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        name: inputValue,
      },
    }));
  }

  handleChangeCategory(event) {
    const inputValue = event.target.value;
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        category: inputValue,
      },
    }));
  }

  handleChangeLevel(event) {
    const inputValue = event.target.value;
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        level: inputValue,
      },
    }));
  }

  handleSubmit(event) {
    console.log('itog', this.state.recipe);
    updateRecipe(this.state.recipe);
  }

    render() {
    let ingredientInfo;
    if(!this.state.recipe.ingredients)
        ingredientInfo = null
    else
        ingredientInfo = <IngredientInfo ingredients={this.state.recipe.ingredients}/>

    return (
      <div>
        <div>
          <label>Название рецепта:</label>
          <input
            type="text"
            value={this.state.recipe.name}
            onChange={this.handleChangeName}
          />
        </div>

        <div>
          <label>Категория:</label>
          <input
            type="text"
            value={this.state.recipe.category}
            onChange={this.handleChangeCategory}
          />
        </div>

        <div>
          <label>Уровень сложности:</label>
          <input
            type="text"
            value={this.state.recipe.level}
            onChange={this.handleChangeLevel}
          />
        </div>

        {ingredientInfo}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default FullRecipe;
