import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IngredientList from '../IngredientList/IngredientList';

import styles from './styles.css';
import globalStyles from '../../styles/globalStyles.css';
import { deleteRecipe } from '../../recipe-service';


class PreviewRecipe extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.updateData(id);
  }


  render() {
    const { recipe } = this.props;
    const body =
        <section>
            <IngredientList ingredients={recipe.ingredients} isDetailed = {false} />
        </section>;


    return (
      <div className={styles.container}>
        <span className={styles.name}>{recipe.name}</span>
        <span className={styles.category}>{recipe.category}</span>
        <div className={globalStyles.row}>
          <label>
                        Уровень сложности:
            {recipe.level}
          </label>
        </div>
        {body}
        <div className={globalStyles.row}>
          <Link
            className={globalStyles.button}
            to={`/recipes/${recipe.id}`}
          >
Смотреть
          </Link>
          <button className={globalStyles.button} onClick={() => this.handleDelete(recipe.id)}>
Удалить
          </button>
        </div>
      </div>

    );
  }
}


export default PreviewRecipe;
