import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import GoogleLogo from '../../images/google.svg'
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }

    const handleLogin = (event) =>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();

        const email = emailRef.current.value;
        const password= passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
    }
    
    const navigateRegister = () =>{
        navigate('/register')
    }
    return (
        <div className='w-50 mx-auto border p-5 m-5 rounded-3'>
            <h1 className='text-center text-primary'>Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button style={{ height: "60px" }} className='btn btn-lg mx-auto d-block w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
           <div className='m-4'>
           <p className='text-center mt-2'>New to Genius Car? <span onClick={navigateRegister} className='text-primary'>Please Register</span></p>
            <p className='text-center mt-2'>Forget Password? <span className='text-primary'>Reset Password</span></p>
           </div>
            <div className='input-wrapper'>
                <button className='google-auth'>
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </button>
            </div>
        </div>
    );
};

export default Login;