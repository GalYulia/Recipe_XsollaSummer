import React, {Component} from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {

    constructor(props) {
        super(props);
        this.onItemClickHandler = this.onItemClickHandler.bind(this)
    }

    onItemClickHandler = param => event =>{
        this.props.updateDetails(param);
    }

    render(){
    const {ingredients} = this.props

    const ingredientElements = ingredients.map(ingredient=>
        <li key={ingredient.id} onClick={this.onItemClickHandler(ingredient.id)}>
            <Ingredient ingredient = {ingredient}/>
        </li>
    )

    return(
        <span>
            <ul>
            {ingredientElements}
            </ul>
        </span>
    );
}
}


export default IngredientList

