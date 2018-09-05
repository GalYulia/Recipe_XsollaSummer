import React, {Component} from 'react'
import {getIngredientsDetails} from "../recipe-service";

class IngredientDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            details: {}
        };
    }

    componentDidMount(){
        this.getIngredientDetails();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selId !== prevProps.selId)
            this.getIngredientDetails();

    }

    getIngredientDetails() {
        const id = this.props.selId;
        getIngredientsDetails(id).then(item => {
            this.setState({details: item /*, value: item.name*/})
        })
    }

    render() {
       // this.getIngredientDetails();
        return (
            <span>
                <div>Калорийность: {this.state.details.cal}</div>
                <div>Белки: {this.state.details.protein}</div>
                <div>Жиры: {this.state.details.fat}</div>
                <div>Углеводы: {this.state.details.carbon}</div>
            </span>

        );
    }
}


export default IngredientDetails

