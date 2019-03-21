import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import uuid from 'uuid';
class App extends Component {
  state = {
    //todos is an array of objects
    todos:[] 
  }

  //GET ALL ITEMS
  componentDidMount() {
    axios.get('https://hunter-todo-api.herokuapp.com/todo-item/123')
      .then(res => this.setState({ todos: res.data }))
  }

//GET DATA OF USER
  componentDidMount() {
    axios.get('https://hunter-todo-api.herokuapp.com/user?username=${new_user}')
      .then(res => this.setState({ todos: res.data }))
  }
  //to access state, we can say this.state dot whatever we want, in this case todos
  
  //will toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  //delete todo
  delTodo = (id) => {
    axios.delete('https://hunter-todo-api.herokuapp.com/todo-item/123')
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }



  render() {
    return (
      <Router>
      <div className="App">
      <div className="container">

      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete=
        {this.markComplete} delTodo={this.delTodo}/> 
        </React.Fragment>
      )} />
       <Route path="/about" component={About} />
      
      
      {/* To embedd our component into main app component we add a tag */}
      </div>
      </div>
      </Router>
      //Diff components can have their own state
    );
  }
}


export default App;
