import React, {Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        //another way of writing the return code
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }   else{
        //     return {
        //         textDecoration: 'none'
        //     }
        // }this the same as
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }
    //when you have an event and have method like this, you call event planner
    // markComplete = (e) => {
    //     console.log(this.props)

    // }
    // the const {id, title } helps us not have tp write out this.props.todo.title
    render(){
        const { id,title} = this.props.todo;
        return(
            <div style = { this.getStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind (this, id)} />
                    {' '}
                { title } 
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                
                </p>
            </div>
            //we do bind in the onclick buttom because it needs to do find id
            //will create the prop delTodo in todo.js
        )
    }
    
}

//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }
  
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor:'pointer',
    float: 'right'
}
const itemStyle ={
    backgroundColor: '#f4f4f4'
}
export default TodoItem   