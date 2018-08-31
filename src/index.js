import React from 'react'
import {render} from 'react-dom'
import Layout from './components/Layout'
import RecipeList from './components/RecipeList'
import FullRecipe from "./components/FullRecipe";

import {BrowserRouter, Route, Switch} from 'react-router-dom';


render((
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={RecipeList}/>
                <Route path="/recipe" component={FullRecipe}/>
            </Switch>
        </Layout>
    </BrowserRouter>
), document.getElementById('root'))