import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  
  render() {
    return (
      <div className="Login">
      <h1>Login</h1>
        <form onSubmit={this.props.getUser} style={{marginBottom:"2rem"}}>  
            <input className="login__input" type ="text" name="userName"/> 
            <Link to="/todoApp">Enter Username</Link>
        </form>
      </div>

    );
  }
}


export default Login;
