import React, { Component } from 'react';
import { getRecipeById, updateRecipe } from '../../recipe-service';
import { isEmpty } from '../../service'
import IngredientInfo from '../IngredientInfo/IngredientInfo';
/*
import styles from './styles.css'
import '..\\..\\..\\src\\styles\\buttons.css';
import block from '../../styles/blocks.css';*/

class FullRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;

      if (!!id) {
          getRecipeById(id).then((item) => {
              this.setState({recipe: item /* , value: item.name */});
          });
      }
  }

    handleChange = (propertyName) => (event) => {
        const { recipe } = this.state;
        const newContact = {
            ...recipe,
            [propertyName]: event.target.value
        };
        this.setState({ recipe: newContact });
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
      <div /*className={block.smallBlock}*/>
          <div /*className={styles.main}*/>
                  {this.setInput("Название рецепта",this.state.recipe.name, this.handleChange('name'))}
                  {this.setInput("Категория",this.state.recipe.category, this.handleChange('category'))}
                  {this.setInput("Уровень сложности",this.state.recipe.level, this.handleChange('level'))}
          </div>
          {ingredientInfo}

          <div /*className={block.block}*/>
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
                      {isEmpty(this.state.recipe) ? 'Create' : 'Submit' }
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
