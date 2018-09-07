import React from 'react'
import {render} from 'react-dom'
import Layout from './components/Layout'
import RecipeList from './components/RecipeList'
import FullRecipe from "./components/FullRecipe";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';
render((
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={RecipeList}/>
                <Route exact path="/recipe" component={FullRecipe}/>
                <Route
                    path="/recipes/:id"
                    render={props => <FullRecipe {...props} />}
                />
            </Switch>
        </Layout>
    </BrowserRouter>
), document.getElementById('root'))