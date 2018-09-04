import React, {Component} from 'react'
import IngredientList from './IngredientList'
import IngredientDetails from './IngredientDetails'

import {getRecipes} from '../recipe-service'

const IngredientInfo = props => {

    const ingredients = props.ingredients
    return(
       <IngredientList ingredients={ingredients}/>

    );
}


export default IngredientInfo

