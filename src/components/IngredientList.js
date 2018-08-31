import React, {Component} from 'react'
import Ingredient from './Ingredient'
import {getRecipes} from '../recipe-service'

const IngredientList = props => {
    const {ingredients} = props
    console.log('listingr',{ingredients})
    const recipeElements = ingredients.map(ingredient=>
        <li key={ingredient.id}><Ingredient ingredient = {ingredient}/></li>
    )

    return(
        <ul>
            {recipeElements}
        </ul>
    );
}


export default IngredientList

