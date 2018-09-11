import React, { Component } from 'react';
import IngredientList from '../IngredientList/IngredientList';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import globalStyles from '../../styles/globalStyles.css';
import styles from './styles.css';

class IngredientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: -1,
    };
    this.handleDetailsUpdate = this.handleDetailsUpdate.bind(this);
  }

  handleDetailsUpdate(filterValue) {
    this.setState({ selectedId: filterValue });
  }

  render() {
    const ingredients = this.props.ingredients;
    let selId;

    if (this.state.selectedId === -1) selId = this.props.ingredients[0].id;
    else selId = this.state.selectedId;

    return (
      <div>
        <div className={globalStyles.row}>
          <div className={globalStyles.col50}>
            <div className={styles.container}>
              <ul>
                <IngredientList ingredients={ingredients} updateDetails={this.handleDetailsUpdate} isDetailed />
              </ul>
            </div>
          </div>
          <div className={globalStyles.col50}>
            <IngredientDetails selId={selId} />
          </div>
        </div>
      </div>
    );
  }
}


export default IngredientInfo;
