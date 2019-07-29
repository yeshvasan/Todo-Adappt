import React, { Component } from 'react';
import _ from 'lodash';
import TodoListItem from './TodoListItem';
import TodoCount from './TodoCount';
export default class TodoList extends Component {
    renderTodoItems(){
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo,index)=> <TodoListItem key={index} {...todo} {...props}/>)
    }
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-md-10 m-auto">
            <div class="card border border-danger  m-2 mt-5 p-4">
            <div className="list form-horizontal">
                <TodoCount todos={this.props.todos}/>
                {this.renderTodoItems()}
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
