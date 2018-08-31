import React, {Component} from 'react'
import Recipe from './Recipe'
import {getRecipes} from '../recipe-service'

class RecipeList extends Component{

    constructor(props){
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount(){
        getRecipes().then(item => {
            console.log('componentWillMount',item)
            this.setState({recipes: item})
            console.log('state componentWillMount',this.state)

        })
    }

    render(){
        const {recipes} = this.state
        const recipeElements = recipes.map(recipe=>
            <li key={recipe.id}><Recipe recipe = {recipe}/></li>
        )

        return(
            <ul>
                {recipeElements}
            </ul>
        );
    }
}

export default RecipeList

