import taskReducers from './taskReducers';
import filterReducers from './filterReducers';
import errorReducers from './showErrorReducer';
import addTaskReducer from './addTaskReducer';


import { reducer as formReducer } from 'redux-form';


export default rootReducer;



function rootReducer(state, action){
    const _state = addTaskReducer(state, action)
    return {
        tasks: taskReducers(_state.tasks, action),
        filterType:  filterReducers(_state.filterType, action),
        errors: errorReducers(_state.errors, action),
    }
}

