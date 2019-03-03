import React from 'react';
import {connect} from 'react-redux';
import * as recipeActions from '../actions/recipeActions';
import {bindActionCreators} from 'redux';


class RecipesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            recipe: {
                title: null
            }
        }
    }

    handleRecipeSave = (event) => {
        //dispatches an action with this.state.recipe as argument
        this.props.actions.createRecipe(this.state.recipe);
    }
    handleTitleChange = (event)=> {
        const recipe = this.state.recipe;
        recipe.title = event.target.value;
        this.setState(
            {
                recipe: recipe
            }
        )
    }
    recipeRow(recipe, index) {
        return <div key={index}>
            {recipe.title}
        </div> 
    }
    // const { params } = props.match
    render() {
        return (
            <div>
                <h2>Rezeptliste </h2>
                {this.props.recipes.map(this.recipeRow)}
                <h3> Rezept hinzufügen</h3>
                <input  
                    type="text"
                    onChange= {this.handleTitleChange}
                    value={this.state.recipe.title}
                />
                <input 
                   type="button"
                   value="Speichern"
                   onClick = {this.handleRecipeSave}
                />
                <p> {this.state.recipe.title}</p>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        recipes: state.recipes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //createRecipe: recipe => dispatch(recipeActions.createRecipe(recipe))
        //goes through all actions defined in recipeAcctions and enables call to dispatch
        actions: bindActionCreators(recipeActions, dispatch)
    }
}
// if second parameter of connect is missing dispatch is automatically attached to props
export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage)