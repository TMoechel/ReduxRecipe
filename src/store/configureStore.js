import {createStore} from 'redux';
import rootReducer from '../reducers/index';


const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState
    )
}

export default configureStore;
