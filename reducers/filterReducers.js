import { FILTER } from './../constants/ActionTypes';



export default function filterReducers(state, action){
    switch(action.type){
        case FILTER:
            return filterTasksReducer(state, action);
        default:
            return state;
    }
}

function filterTasksReducer(state, action) {
    return action.payload.filterType;
}
