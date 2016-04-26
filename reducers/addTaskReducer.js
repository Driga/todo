import { ADD_TASK } from './../constants/ActionTypes';



export default function addTaskReducer(state, action){
    switch(action.type){
        case ADD_TASK:
            return addReducer(state, action);
        default:
            return state;
    }
}

function addReducer(state, action) {
    var id = state.tasks.length++;

    var newTask = {id: id, type: 'todo', text: action.payload.newtask, completed: false};

    var newState = {
        ...state,
        tasks: [...state.tasks, newTask]
    };

    return {
        ...newState,
        errors: [...state.errors, {err: '', id: '', msg: '', param: ''}]
    }

}