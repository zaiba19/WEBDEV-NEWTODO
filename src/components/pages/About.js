import React from 'react'
import { Link } from 'react-router-dom'

const About = props => (
    <div className="login">
        <form>
            <h4>Login</h4>
            <input type="text" name="name" placeholder="Enter User"/>
            <button className='btn'>Submit</button>
        </form>
    
        <form >
            <h4>Register New User</h4>
            <input type="text" name="name" placeholder="New User"/>
            <button className='btn'>Submit</button>
        </form>
     </div>
        
    
    );

export default About;