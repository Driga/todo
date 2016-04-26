import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER ,ERROR} from './../constants/ActionTypes';



export function completeTask(id) {
    return {
        type:COMPLETE_TASK,
        payload: {
            id
        }
    }
}

export function addTask(newtask) {

    return {
        type:ADD_TASK,
        payload: {
            newtask
        },
        meta: {
            validator: {
                newtask: [
                    {
                        func: newtask => newtask.length > 0,
                        msg: 'Cannot add an empty todo'
                    },
                    {
                        func: newtask => newtask.length < 10,
                        msg: 'Title should be maximum 20 symbols'
                    }
                ]
            }
        }
    }
}


export function deleteTask(id) {
    return {
        type:DELETE_TASK,
        payload: {
            id
        }
    }
}

export function editTask(taskId, value) {
    return {
        type:EDIT_TASK,
        payload: {
            taskId,
            value
        }
    }
}

export function filterTasks(filterType) {
    return {
        type:FILTER,
        payload: {
            filterType
        }
    }
}

export function showError(error) {
    return {
        type:ERROR,
        payload: {
            error
        }
    }
}