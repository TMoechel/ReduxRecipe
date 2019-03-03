import * as actionTypes from '../actions/actionTypes';
const recipeReducer = (state=[], action) => {
    switch (action.type) {
        case actionTypes.CREATE_RECIPE: {
            return [
                ...state, Object.assign({}, action.recipe)
            ]
        }
        default: return state;
    }
} 
export default recipeReducer;