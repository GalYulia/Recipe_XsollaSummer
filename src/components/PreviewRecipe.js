import React, {Component} from "react";
import IngredientList from "./IngredientList";
import {Link} from "react-router-dom";

import styles from '../styles/previewrecipe.css';
import button from '../styles/buttons.css';


const PreviewRecipe = (props) => {
    const {recipe} = props
    const body = <section><IngredientList ingredients={recipe.ingredients}/></section>
    return (
        <div className={ styles.card }>
            <span className={ styles.name }>{recipe.name}</span>
            <span className={ styles.category }>{recipe.category}</span>
            <div className={ styles.level }>{recipe.level}</div>
            {body}
            <Link className = {button.button} to= {`/recipes/${recipe.id}`} >See more</Link>
        </div>

    )
}


export default PreviewRecipe