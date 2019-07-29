import React, { Component } from 'react';
import _ from 'lodash';

export default class TodoCount extends Component {
    renderTasksCount(){
        const tasksCount = _.size(this.props.todos);
        return tasksCount ==1? 'Total No of Tasks:1' : ("Total No of Tasks:" + tasksCount);
    }
    render() {
        return (
            <p className="bg-info" style={{ padding: '5px 10px' }}>{ this.renderTasksCount() }</p>

        )
    }
}
