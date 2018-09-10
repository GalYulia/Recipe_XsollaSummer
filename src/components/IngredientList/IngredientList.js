import React, {Component} from 'react'
import Ingredient from '../Ingredient/Ingredient'
import styles from "./styles.css";

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
        <div key={ingredient.id} onClick={this.onItemClickHandler(ingredient.id)}>
            <Ingredient ingredient = {ingredient}/>
        </div>
    )

        return(<ul>{ingredientElements}
            </ul>
        );
}
}

export default IngredientList

