import React from "react";
import RecipeList from './RecipeList'

const Layout = (props) => {
    return(
        <div>
            <header>Рецептульки</header>
            <main>{props.children}</main>
            <footer>Xsolla Summer School 2018</footer>
        </div>
    )
}

export default Layout

