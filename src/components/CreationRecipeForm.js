import React, {Component} from 'react';
import FullRecipe from './FullRecipe/FullRecipe';
import IngredientsAdd from './IngredientsAdd/IngredientsAdd';
import {updateRecipe} from "../recipe-service";


class CreationRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        recipe: {},
        ingredients: []
    };
  }

 /* handleDetailsUpdate(filterValue) {
    this.setState({ selectedId: filterValue });
  }*/

  getData = (value) => {
      this.setState({ ingredients: value })
  }

  render() {
    console.log('arr', this.state.ingredients)
    return (
      <div>
        <span>
          <FullRecipe recipe={{}} isNew = {true} />
          <IngredientsAdd getData={this.getData}/>
        </span>
      </div>
    );
  }
}


export default CreationRecipeForm;
