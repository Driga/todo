import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { filterTasks } from './../actions/actions';
import  TaskList  from './TaskList';
import  Filters  from './Filters';
import Header from './Header';



class App extends Component{


    render() {
        const { onFilter } = this.props;

        return(
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} >
                <div>
                    <div className="Header">
                        <Header />
                    </div>
                    <section>
                        <h3>Taks</h3>
                        <TaskList />
                        <Filters onFilter={onFilter} />
                    </section>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}


function mapStateToProps(state){
    return {
        filterType: state.filterType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFilter: filterType => dispatch(filterTasks(filterType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

