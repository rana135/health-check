import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import GoogleLogo from '../../images/google.svg'

const Login = () => {
    
    return (
        <div className='w-50 mx-auto border p-5 m-5 rounded-3'>
            <h1 className='text-center text-primary'>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button style={{ height: "60px" }} className='btn btn-lg mx-auto d-block w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
           <div className='m-4'>
           <p className='text-center mt-2'>New to Genius Car? <span className='text-primary'>Please Register</span></p>
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