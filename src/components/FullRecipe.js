import React, {Component} from "react";
import {getRecipeById} from '../recipe-service'
import IngredientInfo from "./IngredientInfo";

class FullRecipe extends Component{

    constructor(props){
        super(props);
        this.state = {
            recipe: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const id  = this.props.match.params.id;

        getRecipeById(id).then(item => {
            this.setState({recipe: item /*, value: item.name*/})
        })

        console.log('componentDidMount - full recipe',this.state.recipe)
    }

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState(prevState => ({
            recipe: {
                ...prevState.recipe,
                name: inputValue
            }
        }))
    }

    handleSubmit(event) {
        //alert('Text field value is: ' + this.state.value);
    }

    render() {
        let ingredientInfo;
        if(!this.state.recipe.ingredients)
            ingredientInfo = null
        else
            ingredientInfo = <IngredientInfo ingredients={this.state.recipe.ingredients}/>

        console.log('render - full recipe',this.state.recipe)

        return(
        <div>
            <div>
                <label>Название рецепта:</label>
                    <input type="text"
                           value = {this.state.recipe.name}
                           onChange={this.handleChange}
                    />
            </div>

            <div>
                <label>Категория:</label>
                <input type="text"
                       value={this.state.recipe.category}
                       onChange={this.handleChange}
                />
            </div>

            <div>
                <label>Уровень сложности:</label>
                <input type="text"
                       value={this.state.recipe.level}
                       onChange={this.handleChange}
                />
            </div>

            {ingredientInfo}
            <button onClick={this.handleSubmit}>Submit</button>
        </div>
    );
    }
}

export default FullRecipe