import React, { Component } from 'react';
import { getRecipeById, updateRecipe, postRecipe } from '../../recipe-service';
import IngredientInfo from '../IngredientInfo/IngredientInfo';
import IngredientsAdd from "../IngredientsAdd/IngredientsAdd";

import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';
import {withRouter} from 'react-router-dom';


import { random } from '../../service';

class FullRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
        ingredientsList: []
    };
    this.handleChange = this.handleChange.bind(this);
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
        const newContact = this.extracted(propertyName, event);
        this.setState({recipe: newContact});
    }

    extracted(propertyName, event) {
        const {recipe} = this.state;
        const newContact = {
            ...recipe,
            [propertyName]: event
        };
        return newContact;
    }

    getData = (value) => {
        this.handle('ingredients', value);
    };

    submitForm (e) {
        e.preventDefault();
        if (this.props.isNew) {
            const newContact = this.extracted('id', random());
            postRecipe(newContact).then((response) =>
                {this.props.history.push('/'); }
            );
        }
        else
            updateRecipe(this.state.recipe).then((response) =>
                {this.props.history.push('/'); }
            );
    }

    render() {
        const isNew =  this.props.isNew;
        let ingredientComponent;

        if (isNew)
            ingredientComponent = <IngredientsAdd getData={this.getData}/>
        else
            ingredientComponent =  !this.state.recipe.ingredients ? null : <IngredientInfo ingredients={this.state.recipe.ingredients}/>


    return (
        <form onSubmit={this.submitForm.bind(this)}>
        <div>
            <div className={globalStyles.container}>
              {this.setInput("Название рецепта",this.state.recipe.name, this.handleChange('name'))}
              {this.setInput("Категория",this.state.recipe.category, this.handleChange('category'))}
              {this.setInput("Уровень сложности",this.state.recipe.level, this.handleChange('level'))}
          </div>
          {ingredientComponent}


            <div className={globalStyles.row}>
                <div className={globalStyles.container}>
                    <h3>Шаги</h3>
                 <textarea
                   type="text"
                   value={this.state.recipe.steps}
                   onChange={this.handleChange('steps')}
                   required
                  />
              </div>
            </div>

                <button type="submit" className={styles.button}>
                      <h3>{ isNew ? 'Создать' : 'Изменить' }</h3>
            </button>
          </div>
        </form>
    );
  }

    setInput(label, value, event) {
        return <div className={globalStyles.row}>
            <div className={globalStyles.col25}>
            <label>{label}</label>
            </div>
            <div className={globalStyles.col75}>
                <input
                    type="text"
                    value={value}
                    onChange={event}
                    required
                />
            </div>
            </div>;
    }
}

export default FullRecipe;
