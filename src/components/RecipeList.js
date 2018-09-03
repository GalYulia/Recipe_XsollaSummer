import React, {Component} from 'react'
import PreviewRecipe from './PreviewRecipe'
import {getRecipes} from '../recipe-service'
import { Link } from 'react-router-dom'
class RecipeList extends Component{

    constructor(props){
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount(){
        getRecipes().then(item => {
            this.setState({recipes: item})
        })
    }

    render(){
        const {recipes} = this.state
        const recipeElements = recipes.map(recipe=>
            <li key={recipe.id}><PreviewRecipe recipe = {recipe}/></li>
        )

        return(
            <div>
                <Link to = "/recipe">Create recipe</Link>
                <ul>
                    {recipeElements}
                </ul>
            </div>
        );
    }
}

export default RecipeList

