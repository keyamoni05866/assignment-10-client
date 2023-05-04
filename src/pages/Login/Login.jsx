import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
   const {signIn,googleProvider, githubProvider} = useContext(AuthContext);
   const [error, setError] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    // if(!password){
    //     setError('Please enter the correct password!')
    //    }
    //   else if(!email){
    //     setError('Please enter the correct email!!')
    //    }
    signIn(email, password)
    .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser)
        setError('')
        navigate(from ,{replace: true})
       
        
    })
    .catch(error => console.error(error.message))
   }
   const signInWithGoogle = () =>{
    googleProvider()
    .then(result => {
        const getUser = result.user;
        console.log(getUser)
        navigate(from ,{replace: true})
    })
    .catch(error => console.error(error.message) )
}
const signInWithGithub = () =>{
    githubProvider()
    .then(result =>{
        const getGithubUser = result.user;
        console.log(getGithubUser);
        navigate(from ,{replace: true})
    })
    .catch(error => console.error(error))
}
    return (
        <div className="form-container pb-4">
           
            <h2 className='form-title'> Please Login!</h2>
            <form onSubmit={handleLogin}>
                <div className="form-controller">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' required />
                </div>
                <div className="form-controller">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' id='' required />
                     
                </div>
                <p className='text-danger'>{error}</p>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='text-secondary fs-5 mt-3'><small>New to Master-Chef?  <Link className=' text-danger-emphasis' to="/register">Create New Account</Link></small></p>
         <div className='mt-5'>
         <button className='btn-Google' onClick={signInWithGoogle}> <FaGoogle className='me-2' />Login With Google</button>
            <button onClick={signInWithGithub} className='btn-Github' ><FaGithub className='me-2'/> Login With Github</button>
         </div>
     
      </div>
    );
};

export default Login;