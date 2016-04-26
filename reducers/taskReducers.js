import {  DELETE_TASK, COMPLETE_TASK, EDIT_TASK, ERROR} from './../constants/ActionTypes';



export default function tasksReducer(state, action){
    switch(action.type){
        case COMPLETE_TASK:
            return completeTaskReducer(state, action);
        case DELETE_TASK:
            return deleteTaskReducer(state, action);
        case EDIT_TASK:
            return editTaskReducer(state, action);
        default:
            return state;
    }
}

function completeTaskReducer(state, action) {
    var id = action.payload.id;

    return state.map(task => {
        if(id === task.id) {
            return task.completed === false
                ? {...task, completed: true}
                : {...task, completed: false}
        }
        return task;
    })
}

function deleteTaskReducer(state, action) {
    var newState = state.filter(task => task.id !==  action.payload.id);
    var iterator = 0;
    newState.map(task => {
        task.id = iterator;
        iterator++;
    });
    return newState;
}

function editTaskReducer(state, action) {
    return state.map(task => {

        if (task.id !== action.payload.taskId)
            return task;

        return action.payload.value
            ? {...task, isBeingEdited: false, text: action.payload.value}
            : {...task, isBeingEdited: true}
    })
}

