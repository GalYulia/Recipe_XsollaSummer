import React, {Component} from 'react';
import FullRecipe from './FullRecipe/FullRecipe';
import IngredientsAdd from './IngredientsAdd/IngredientsAdd';


class CreationRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        recipe: {},
        ingredients: []
    };
    //this.handleDetailsUpdate = this.handleDetailsUpdate.bind(this);
  }

 /* handleDetailsUpdate(filterValue) {
    this.setState({ selectedId: filterValue });
  }*/

  getData = (value) => {
      console.log('я тут!')

      this.setState({ ingredients: value })
  }

  render() {
    console.log('arr', this.state.ingredients)
    return (
      <div>
        <span>
          <FullRecipe recipe={{}} />
          <IngredientsAdd getData={this.getData}/>
        </span>
      </div>
    );
  }
}


export default CreationRecipeForm;
