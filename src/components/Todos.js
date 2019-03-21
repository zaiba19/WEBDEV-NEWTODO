import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
 
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key= {todo.id} todo={todo} markComplete= 
      {this.props.markComplete} delTodo= {this.props.delTodo}/>
        //todo is the object and title is the property

        //for each todo that we map through, what do we want to return/display in browser
    ));

  }
}
//PropTypes
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
 