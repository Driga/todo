import { createStore, applyMiddleware  } from 'redux';
import Validator from 'redux-validator';
import RootReducer from './../reducers/reducers';


const validator = Validator();


const tasks = [
    {
        id: 0,
        type: 'todo',
        text: 'check facebook',
        completed: true,
        isBeingEdited: false
    },
    {
        id: 1,
        type: 'todo',
        text: 'walk up the stairs',
        completed: false,
        isBeingEdited: false
    },
    {
        id: 2,
        type: 'todo',
        text: 'finish Redux tutorial',
        completed: false,
        isBeingEdited: false
    },
    {
        id: 3,
        type: 'todo',
        text: 'finish Redux slides',
        completed: true,
        isBeingEdited: false
    },
    {
        id: 4,
        type: 'todo',
        text: 'Drink a beer',
        completed: true,
        isBeingEdited: false
    },
    {
        id: 5,
        type: 'todo',
        text: 'jump with parachute',
        completed: false,
        isBeingEdited: false
    },
    {
        id: 6,
        type: 'todo',
        text: 'buy an airplane',
        completed: true,
        isBeingEdited: false
    }
];

const error = {

    err: '', msg: '', param: '', id: ''

}

const initialState = {
    tasks: tasks,
    filterType: 'All',
    errors: error
};

const createStoreWithMiddleware = applyMiddleware(validator)(createStore);

let Store = createStoreWithMiddleware(RootReducer, initialState);

export default Store;