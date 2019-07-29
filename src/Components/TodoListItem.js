import React, { Component } from 'react';
import {FaSave, FaTrash, FaEdit} from 'react-icons/fa';

export default class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            isEditing:false
        };
    }
    renderTaskSection(){
        const {task, isCompleted} = this.props;

        const taskStyle = {
            color:isCompleted? '#5cb85c' : '#d9534f',
            cursor:'pointer'
        };
        if(this.state.isEditing){
            return(
                <label className="col-md-5 text-left">
                    <form onSubmit={this.onSaveClick.bind(this)}>
                    <input className="form-control input-sm" defaultValue={task} ref="editInput" type="text" />
                    </form>
                </label>
            )
        }
        return (
            <label className="col-md-5 text-left text" style={ taskStyle } onClick={this.props.toggleTask.bind(this, task) }>
                {task}
            </label>
        )

    }
    renderStateSection(){
        const {isCompleted} = this.props;
        if(isCompleted){
            return(
                
                    <div className="col-md-3 text-right">
                        <span className="label label-success border border-success comp">COMPLETED</span>
                        <br/>
                    </div>
                )
            }
    
            return (
                <div className="col-md-3 text-right">
                    <span className="label label-danger border border-danger pen">PENDING</span>
                </div>
            )
            
        }
        renderActionSection() {
            if (this.state.isEditing) {
                return (
                    <div className="col-md-4 text-right">
                        <button className="btn btn-success btn-xs" onClick={this.onSaveClick.bind(this) }>
                            <FaSave />
                        </button>
                        &nbsp; &nbsp; &nbsp;
                        <button className="btn btn-primary btn-xs" onClick={this.onCancelClick.bind(this) }>Cancel</button>
                    </div>
                )
            }
    
            return (
                <div className="col-md-4 text-right">
                    <button className="btn btn-info btn-xs" onClick={this.onEditClick.bind(this) }>
                        <FaEdit />
                    </button>
                    &nbsp; &nbsp; &nbsp;
                    <button className="btn btn-danger btn-xs" onClick={this.props.deleteTask.bind(this, this.props.task) }>
                        <FaTrash />
                    </button>
                </div>
            )
        }
    
        render() {
            return (
                <div className="form-group form-inline">
                
                    { this.renderTaskSection() }
                    { this.renderStateSection() }
                    { this.renderActionSection() }
                </div>
                
            )
        }
    
    
        componentDidUpdate() {
            if (this.state.isEditing) {
                this.refs.editInput.focus();
            }
        }
    
    
        onEditClick() {
            this.setState({ isEditing: true });
    
        }
    
    
    
        onCancelClick() {
            this.setState({ isEditing: false });
        }
    
    
    
        onSaveClick(event) {
            event.preventDefault();
    
            const oldTask = this.props.task;
            const newTask = this.refs.editInput.value;
            this.props.saveTask(oldTask, newTask);
            this.setState({ isEditing: false });
        }
    
    }

