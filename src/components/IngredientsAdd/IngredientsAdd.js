import React, { Component } from 'react';

import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';
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
      <div className={globalStyles.container}>
        <h3>Ингредиенты</h3>
          <div className={globalStyles.row}>
              <div className={styles.col33}>
                <input type="text" placeholder={"Наименование..."} value={this.state.ingredient.name} onChange={this.handleChange('name')} />
              </div>
              <div className={styles.col33}>
                  <input type="text" placeholder={"Количество..."} value={this.state.ingredient.quantity} onChange={this.handleChange('quantity')} />
              </div>
              <div className={styles.col33}>
                  <button className={styles.button} onClick={this.handleSubmit}>Добавить</button>
              </div>
          </div>
        <ol>
          {this.state.list.map((item, index) => (
              <div className={globalStyles.row} key={index}>
                  <div className={styles.col33}>
                <label>{item.name} </label>
                  </div>

                  <div className={styles.col33}>
                      <label>{item.quantity}</label>
                  </div>

                  <div className={styles.col33}>
                    <button className={styles.removeButton} onClick={() => this.removeItem(index)}>Удалить</button>
                  </div>
            </div>))}
        </ol>
      </div>
    );
  }
}
export default IngredientsAdd;
