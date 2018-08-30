import React, {Component} from "react";

class Recipe extends Component{

    constructor(props){
        super(props)

        this.state = {
            isOpen: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        const {recipe} = this.props
        const body = this.state.isOpen && <section>{recipe.category}</section>
        return (
            <div>
                <h2>{recipe.name}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>{recipe.id}</h3>
            </div>
        )
    }
}

export default Recipe