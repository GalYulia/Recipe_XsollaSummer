import React, { Component } from 'react';
import { getRecipeById, updateRecipe, postRecipe } from '../../recipe-service';
import IngredientInfo from '../IngredientInfo/IngredientInfo';
import IngredientsAdd from "../IngredientsAdd/IngredientsAdd";
/*
import styles from './styles.css'
import '..\\..\\..\\src\\styles\\buttons.css';
import block from '../../styles/blocks.css';*/

class FullRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
        ingredientsList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      if (!!this.props.match && !! this.props.match.params.id) {

              getRecipeById(this.props.match.params.id).then((item) => {
                  this.setState({recipe: item});
              });
          }
  }

    handleChange = (propertyName) => (e) => {
        let event  = e.target.value

        this.handle(propertyName, event);
    }

    handle(propertyName, event) {
        const {recipe} = this.state;
        const newContact = {
            ...recipe,
            [propertyName]: event
        };
        this.setState({recipe: newContact});
    }

    handleSubmit() {
      if (this.props.isNew)
          postRecipe(this.state.recipe);
      else
          updateRecipe(this.state.recipe);
  }

    getData = (value) => {
        this.handle('ingredients', value);
    }

    render() {
        const isNew =  this.props.isNew;
        let ingredientComponent;

        if (isNew)
            ingredientComponent = <IngredientsAdd getData={this.getData}/>
        else
            ingredientComponent =  !this.state.recipe.ingredients ? null : <IngredientInfo ingredients={this.state.recipe.ingredients}/>


    return (
      <div>
          <div>
              {this.setInput("Название рецепта",this.state.recipe.name, this.handleChange('name'))}
              {this.setInput("Категория",this.state.recipe.category, this.handleChange('category'))}
              {this.setInput("Уровень сложности",this.state.recipe.level, this.handleChange('level'))}
          </div>
          {ingredientComponent}

          <div>
              <div>
                <label>Шаги</label>
                 <textarea
                   type="text"
                   value={this.state.recipe.steps}
                   onChange={this.handleChange('steps')}
                  />
              </div>

              <div>
                  <button onClick={this.handleSubmit}>
                      { this.state.isNew ? 'Create' : 'Submit' }
                  </button>
              </div>
          </div>
      </div>
    );
  }

    setInput(label, value, event) {
        return <div /*className={styles.field}*/>
                <label>{label}</label>
                <input
                    type="text"
                    value={value}
                    onChange={event}
                />
            </div>;
    }
}

export default FullRecipe;
