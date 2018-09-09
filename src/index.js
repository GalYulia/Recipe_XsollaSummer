import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RecipeList from './components/RecipeList/RecipeList';
import FullRecipe from './components/FullRecipe/FullRecipe';


import './index.css';
import './styles/globalStyles.css';
import CreationRecipeForm from './components/CreationRecipeForm';


render((
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={RecipeList} />
        {/* <Route path="/recipe" render={props => <CreationRecipeForm {...props} location={props.location} key={props.location.key} />} /> */}
        <Route exact path="/recipe" component={CreationRecipeForm} />
        <Route
          path="/recipes/:id"
          render={props => <FullRecipe {...props} />}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
), document.getElementById('root'));
