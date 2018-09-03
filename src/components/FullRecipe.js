import React from "react";

const FullRecipe = (props)=>{

/*console.log(props)
    return(
        <div>
            <h1>Рецептик в детальках ID: {props.params.id}</h1>
        </div>
    )*/

        const { text, match: { params } } = props;

        const { id } = params;

        return (
            <div>
                <h1>Рецептик в детальках ID: {id}</h1>
            </div>
        );
    }

export default FullRecipe