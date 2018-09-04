import React, {Component} from 'react'
import Ingredient from './Ingredient'
import {getRecipes} from '../recipe-service'

class IngredientList extends Component {
    constructor(props) {
        super(props);
        this.onItemClickHandler = this.onItemClickHandler.bind(this)
    }

    onItemClickHandler = param => event =>{
        console.log('test', param);
        this.props.updateFilter(param);
    }

    render(){
    const {ingredients} = this.props

    const recipeElements = ingredients.map(ingredient=>
        <li key={ingredient.id} onClick={this.onItemClickHandler(ingredient.id)}><Ingredient ingredient = {ingredient}/></li>
    )
    return (
        <ul>
            {recipeElements}
        </ul>
    );
}
}


export default IngredientList

