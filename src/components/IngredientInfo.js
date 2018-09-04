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
        this.setState({selectedId: filterValue},
            function afterTitleChange () {
                console.log('okeee', this.state.selectedId);
                ;
            });


    }

    render() {
        const ingredients = this.props.ingredients
     /*   let myData;
        if (this.state.selectedId == -1)
            myData = getIngredientsDetails(this.props.ingredients[0].id)
        else
            myData = getIngredientsDetails(this.props.selectedId)

        console.log('qwqwe',myData)*/
        return (
            <IngredientList ingredients={ingredients} updateFilter={this.handleFilterUpdate}/>

        );
    }
}


export default IngredientInfo

