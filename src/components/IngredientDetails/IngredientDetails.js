import React, { Component } from 'react';
import { getIngredientsDetails } from '../../recipe-service';
import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';
import '../../styles/styles.css';


class IngredientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    this.getIngredientDetails();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selId !== prevProps.selId) this.getIngredientDetails();
  }

  getIngredientDetails() {
    const id = this.props.selId;
    getIngredientsDetails(id).then((item) => {
      this.setState({ details: item /* , value: item.name */});
    });
  }

  getDiv(value) {
    return (
      <div className={globalStyles.col50}>
        <label>
          {value}
        </label>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <h3>Выбранный ингредиент</h3>
        {this.getDiv('Калорийность:')}
        {this.getDiv(this.state.details.cal)}
        {this.getDiv('Белки:')}
        {this.getDiv(this.state.details.protein)}
        {this.getDiv('Жиры:')}
        {this.getDiv(this.state.details.fat)}
        {this.getDiv('Углеводы:')}
        {this.getDiv(this.state.details.carbon)}
      </div>
    );
  }
}


export default IngredientDetails;
