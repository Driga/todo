import React, { Component } from 'react';
import { connect } from 'react-redux';
import {   filterTasks  } from './../actions/actions';


class Filters extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const{ onFilter } = this.props;

        return (
            <div className="btn-group" role="group" >
                <button type="button" className="btn btn-primary" onClick={() => {onFilter('all') }}>All</button>
                <button type="button" className="btn btn-success" onClick={() => {onFilter('completed') }}>Completed</button>
                <button type="button" className="btn btn-warning" onClick={() => {onFilter('todos') }}>To do</button>
            </div>
        )
    }
}

export default Filters;