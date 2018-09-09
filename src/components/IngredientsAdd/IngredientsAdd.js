import React, { Component } from 'react';
import CreationRecipeForm from '../CreationRecipeForm';

// import styles from './styles.css';

class IngredientsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      ingredient: {
        id: 0,
        name: '',
        quantity: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getData(this.state.list);
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.ingredient),
      ingredient: {
          id: prevState.ingredient.id + 1,
          name: '',
          quantity: '',
      }
    }),  function() {this.props.getData(this.state.list)}
    );
  }

   handleChange = (propertyName) => (event) => {
        const { ingredient } = this.state;
        const newIgr = {
            ...ingredient,
            [propertyName]: event.target.value
        };
        this.setState({ ingredient: newIgr });
   }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list }, function () {
        this.props.getData(this.state.list);
    });
  }

  render() {
      return (
      <div>
        <h1>Ингредиенты</h1>
        <input value={this.state.ingredient.name} onChange={this.handleChange('name')} />
        <input value={this.state.ingredient.quantity} onChange={this.handleChange('quantity')} />
        <button onClick={this.handleSubmit}>Add</button>
        <ol>
          {this.state.list.map((item, index) => (
            <li key={index}>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
              <button onClick={() => this.removeItem(index)}>Delete</button>
            </li>))}
        </ol>
      </div>
    );
  }
}
export default IngredientsAdd;
