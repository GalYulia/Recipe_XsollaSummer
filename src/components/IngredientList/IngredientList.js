import React, {Component} from 'react'
import Ingredient from '../Ingredient/Ingredient'
import styles from "./styles.css";

class IngredientList extends Component {

    constructor(props) {
        super(props);
        this.onItemClickHandler = this.onItemClickHandler.bind(this)
    }

    onItemClickHandler = param => event =>{
        //event.target.parentElement.parentElement.classList.add('selected');
        this.props.updateDetails(param.id);
    }

    render(){
    const {ingredients} = this.props
    const {isDetailed} = this.props
    const ingredientElements = ingredients.map(ingredient=>
        <div key={ingredient.id} onClick={() => isDetailed ? this.onItemClickHandler(ingredient)() : false}>
            <Ingredient ingredient = {ingredient}/>
        </div>
    )

        return(<ul>{ingredientElements}
            </ul>
        );
}
}

export default IngredientList

