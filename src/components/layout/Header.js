//rfc tab
import React from 'react'
import { Link } from 'react-router-dom';
import { TextDecoder } from 'util';

function Header() {
  return (
    <header style={headerStyle}> 
      <h1> Todo List by Zaiba Iqbal </h1>
      <Link style={linkStyle} to="/about">Login</Link> | <Link style={linkStyle} to="/">Todo</Link>  
    </header>
  )
}
const headerStyle = {
    background: '#333',
    color: 'rgb(219, 171, 195)',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color:'#fff',
    textDecoration:'none'
}
export default Header;