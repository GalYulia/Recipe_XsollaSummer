import React, { Component } from 'react';
import { getIngredientsDetails } from '../../recipe-service';
import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';

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

  render() {
    return (
      <div className={styles.container}>
          <h3>Выбранный ингредиент</h3>
        <div className={globalStyles.col50}>
          <label>
                  Калорийность:
          </label>
        </div>
        <div className={globalStyles.col50}>
          <label>
            {this.state.details.cal}
          </label>
        </div>

        <div className={globalStyles.col50}>
          <label>
                  Белки:
          </label>
        </div>
        <div className={globalStyles.col50}>
          <label>
            {this.state.details.protein}
          </label>
        </div>

        <div className={globalStyles.col50}>
          <label>
                  Жиры:
          </label>
        </div>
        <div className={globalStyles.col50}>
          <label>
            {this.state.details.fat}
          </label>
        </div>

        <div className={globalStyles.col50}>
          <label>
                  Углеводы:
          </label>
        </div>
        <div className={globalStyles.col50}>
          <label>
            {this.state.details.carbon}
          </label>
        </div>
      </div>
    );
  }
}


export default IngredientDetails;
