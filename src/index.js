import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RecipeList from './components/RecipeList/RecipeList';
import FullRecipe from './components/FullRecipe/FullRecipe';


import './index.css';
import './styles/globalStyles.css';


render((
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route exact path="/recipe" render={props => <FullRecipe {...props} isNew={true} />} />
        <Route
          path="/recipes/:id"
          render={props => <FullRecipe {...props} isNew={false} />}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
), document.getElementById('root'));
