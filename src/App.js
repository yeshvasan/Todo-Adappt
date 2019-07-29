import React from 'react';
import './App.css';
import _ from 'lodash';
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList';

const todos = [
  {
    task: 'Give the quotation for site',
    isCompleted:false
  },
  {
    task:'Write the home work',
    isCompleted:false
  }
];
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todos:todos
    }
  }
render(){
  return( 
    <div>
      <h1>Todo App</h1>
      <div className="td-list-con">
      <TodoCreate todos={this.state.todos} createTask={this.createTask.bind(this)}/>
      <br />
      <TodoList todos={this.state.todos} saveTask={this.saveTask.bind(this)} deleteTask={this.deleteTask.bind(this)} toggleTask={this.toggleTask.bind(this)} />

      </div>
    </div>
  )
}
  createTask(task){
    this.state.todos.push({
      task,
      isCompleted:false
    });
    this.setState({
      todos:this.state.todos
    });
  }
  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({
      todos:this.state.todos
    });
  }
  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({
      todos:this.state.todos
    });
  }
  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({
      todos:this.state.todos
    });

  }
}
