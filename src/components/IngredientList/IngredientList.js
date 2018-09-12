import React, {Component} from 'react'
import Ingredient from '../Ingredient/Ingredient'

class IngredientList extends Component {

    constructor(props) {
        super(props);
        this.onItemClickHandler = this.onItemClickHandler.bind(this);
        this.state = {
            selectedId: -1,
        };
    }

    onItemClickHandler = param => event =>{
        this.setState({selectedId : param.id});
        this.props.updateDetails(param.id);
    }

    render(){
    const {ingredients , isDetailed} = this.props
    const ingredientElements = ingredients ? (ingredients.map(ingredient=>
        <div key={ingredient.id} onClick={() => isDetailed ? this.onItemClickHandler(ingredient)() : false}>
            <Ingredient
                ingredient = {ingredient}
                isSelected = { isDetailed && (this.state.selectedId === ingredient.id ||
                    (this.state.selectedId === -1 && ingredient.id === ingredients[0].id))}
            />
        </div>
    )) : null

        return(<div>{ingredientElements}</div>);
}
}

export default IngredientList

