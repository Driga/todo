import React, { Component } from 'react';
import {  editTask, deleteTask, addTask, completeTask } from './../actions/actions';
import { connect } from 'react-redux';


class TaskList extends Component {

    constructor(props) {
        super(props);
    }

    checkEditing(task) {
        if(task.isBeingEdited){
            return <input className="form-control inputedit" id={'edittask'+task.id} type="text" ref={'edittask'+task.id} defaultValue={task.text}/>
        }else{
            return task.text;
        }
    }

    render() {
        const{ onCompleteTask, onDeleteTask, onChangeToInput, onSaveTask, tasks, filterType } = this.props;

        var filtered = tasks;
        if(filterType == 'completed'){
            filtered = tasks.filter(task => task.completed === true);
        }else if(filterType == 'todos'){
            filtered = tasks.filter(task => task.completed === false);
        }


        return (
            <div>

                <ul className="list-group">
                    {filtered.map(task =>
                    <li className="list-group-item" key={task.id} >
                        <div
                            className={'glyphicon compBtn glyphicon-' + (task.completed ?'ok ' : 'unchecked ')}
                            onClick={ () => {onCompleteTask(task) }}
                        ></div>
                        <div className={'taskName ' + (task.completed?' completed':' not')} >
                            {this.checkEditing(task)}
                        </div>
                        <div
                            onClick={ () => {onDeleteTask(task.id) }}
                            className="glyphicon glyphicon-trash trashbtn">
                        </div>
                        <div
                            onClick={
                                task.isBeingEdited
                                ? () => { onSaveTask(task.id, this.refs['edittask'+task.id]) }
                                : () => { onChangeToInput(task.id, this.refs['edittask'+task.id]) }}
                            className={'glyphicon editbtn glyphicon-' + (task.isBeingEdited ? 'floppy-disk ' : 'pencil ')}>
                        </div>
                    </li>
                    )}
                </ul>
            </div>

        )
    }
}


function mapStateToProps(state){

    return {
        tasks: state.tasks.filter(task => task.type === 'todo'),
        errors: state.errors,
        filterType: state.filterType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCompleteTask: task => dispatch(completeTask(task.id)),
        onDeleteTask: id => dispatch(deleteTask(id)),
        onChangeToInput: (taskId, el) => {
            return dispatch(editTask(taskId, el))
        },
        onSaveTask: (taskId, el) => {
            return dispatch(editTask(taskId, el.value))
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);
