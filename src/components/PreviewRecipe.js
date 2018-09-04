import React, {Component} from "react";
import IngredientList from "./IngredientList";
import {Link} from "react-router-dom";

const PreviewRecipe = (props) => {
    const {recipe} = props
    const body = <section><IngredientList ingredients={recipe.ingredients}/></section>
    return (
        <div>
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
            <div>{recipe.level}</div>
            {body}
            <Link to = {`/recipes/${recipe.id}`} >See more</Link>
        </div>

    )
}


export default PreviewRecipe