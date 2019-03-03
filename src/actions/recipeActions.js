//action creator function (an action must have a tpye, other parameters are optional)
// The UI triggers an action creator like createRecipe which creates an action
// 
import * as actionTypes from './actionTypes';

export function createRecipe(recipe) {
    return {type: actionTypes.CREATE_RECIPE, recipe: recipe}
 }

