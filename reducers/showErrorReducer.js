import { ERROR } from './../constants/ActionTypes';



export default function errorReducers(state, action){
    switch(action.type){
        case ERROR:
            return showErrorReducer(state, action);
        default:
            return state;
    }
}


function showErrorReducer(state, action) {

    let errors = action.payload.error;

    /*var value = action.payload.value;
     var id = state.length++;
     var newTask = {id: id, type: 'todo', text: value, completed: false};*/
    return  errors;
}



