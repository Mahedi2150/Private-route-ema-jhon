import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory()
    const location = useLocation();
    const redirect_url = location.state?.from || '/shop';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url)
        })
    }
    return (
        <div className= "login-form">
            <div>
                    <h2> Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Enter your ebail" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema jhon? <Link to="/register"> Create Acount</Link></p>
                <div>-------------or-----------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogIn}
                >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;
