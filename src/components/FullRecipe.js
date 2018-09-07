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

  handleSubmit() {
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
          {this.setInput("Название рецепта", this.state.recipe.name)}
          {this.setInput("Категория", this.state.recipe.category)}
          {this.setInput("Уровень сложности", this.state.recipe.level)}

          {ingredientInfo}
          <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }

    setInput(name, field) {
        return <div>
            <label>{name}</label>
            <input
                type="text"
                value={field}
                onChange={this.handleChangeName}
            />
        </div>;
    }
}

export default FullRecipe;
