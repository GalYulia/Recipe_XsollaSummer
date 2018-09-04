import React, {Component} from 'react'

const IngredientDetails = props => {

    const {ingredient} = props
    return(
        <div>
            <div>Калорийность: {ingredient.cal}</div>
            <div>Белки: {ingredient.protein}</div>
            <div>Жиры: {ingredient.fat}</div>
            <div>Углеводы: {ingredient.carbon}</div>
        </div>

);
}


export default IngredientDetails

