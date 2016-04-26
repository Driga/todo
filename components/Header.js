import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {  addTask, showError } from './../actions/actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const{ onAddTask, errors } = this.props;
        return (
            <div>

                    <h2  key="12345">New task:</h2>

                    <form onSubmit={event => onAddTask(event, this.refs.newtask.value)}>
                        <input className="form-control" type="text" ref="newtask" />
                        <input
                            className="btn btn-success"
                            type="submit"
                            value="Add"

                        />
                    </form>

                    <div className={'alert alert-danger '+ (errors.msg ? ' visible' : 'hiden')}>{errors.msg}</div>


            </div>

        )
    }
}



function mapStateToProps(state){

    return {
        tasks: state.tasks.filter(task => task.type === 'todo'),
        errors: state.errors

    };
}

function mapDispatchToProps(dispatch) {
    return {

        onAddTask: (event, newtask) => {
            event.preventDefault();
            let error = dispatch(addTask(newtask));
            if(error.err){
                dispatch(showError(error))

            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
