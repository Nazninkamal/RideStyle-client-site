import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-form mb-2">
            <div>
                <h2>Register: Create Account</h2>
                <form >
                <input className="mb-2" type="text" name="" id="" placeholder=" First Name" />
                    <br />
                    <input className="mb-2" type="text" name="" id="" placeholder=" Last Name" />
                    <br />


                    <input className="mb-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="mb-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="mb-2" type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input className="btn btn-success"  type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button onClick={signInUsingGoogle}  className="btn btn-warning mb-5">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;