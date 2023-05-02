import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="form-container pb-4">
           
            <h2 className='form-title'> Please Login!</h2>
            <form>
                <div className="form-controller">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' required />
                </div>
                <div className="form-controller">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' id='' required />
                     
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='text-secondary fs-5 mt-3'><small>New to Master-Chef?  <Link className=' text-danger-emphasis' to="/register">Create New Account</Link></small></p>
         <div className='mt-5'>
         <button className='btn-Google'> <FaGoogle className='me-2' />Login With Google</button>
            <button className='btn-Github' ><FaGithub className='me-2'/> Login With Github</button>
         </div>
     
      </div>
    );
};

export default Login;