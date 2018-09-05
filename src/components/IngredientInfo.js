import React, {Component} from 'react'
import IngredientList from './IngredientList'
import IngredientDetails from './IngredientDetails'
import {getIngredientsDetails} from '../recipe-service'


class IngredientInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: -1
        }
        this.handleFilterUpdate = this.handleFilterUpdate.bind(this);

    }

    handleFilterUpdate(filterValue) {
        this.setState({selectedId: filterValue}/*,
            function afterTitleChange () {
            }*/);
    }

    render() {
        const ingredients = this.props.ingredients
        let selId;

        if (this.state.selectedId == -1)
            selId = this.props.ingredients[0].id
        else
            selId = this.state.selectedId

        return (
            <span>
                <IngredientList ingredients={ingredients} updateFilter={this.handleFilterUpdate}/>
                <IngredientDetails selId={selId}/>
            </span>
        );
    }
}


export default IngredientInfo

