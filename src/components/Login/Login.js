import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    return (
        <div className= "login-form">
            <div>
                    <h2> Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your ebail" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema jhon? <Link to="/register"> Create Acount</Link></p>
                <div>-------------or-----------</div>
                <button className="btn-regular">Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;
