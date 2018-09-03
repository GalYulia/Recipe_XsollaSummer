import React, {Component} from "react";
import IngredientList from "./IngredientList";
import {Link} from "react-router-dom";

class PreviewRecipe extends Component{

    constructor(props){
        super(props)

        this.state = {
            isSelected: false
        }

    }

    handleClick(){
        console.log('я кнопка')
    }

    render(){
        const {recipe} = this.props
        const body = <section><IngredientList ingredients={recipe.ingredients}/></section>
        return (
            <div>
                <span>{recipe.name}</span>
                <span>{recipe.category}</span>
                <div>{recipe.level}</div>
                {body}
                <Link to = {`/recipes/${recipe.id}`} onClick={this.handleClick} >See more</Link>
            </div>

        )
    }
}

export default PreviewRecipe