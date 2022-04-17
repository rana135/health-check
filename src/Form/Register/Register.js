import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../images/google.svg'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [validated, setValidated] = useState(false);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    let errorELement;
    if (error || error1) {
        errorELement= (
            <div>
                <p>Error: {error?.message}{error1?.message}</p>
            </div>
        );
    }

    if (user || user1) {
        navigate('/home')
    }

    if(loading || loading1){
        return <Loading></Loading>
    }

    const handleRegister = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
        console.log(email, password);
    }

    const navigateLogin = () => {
        navigate("/login")
    }
    return (
        <div className='w-50 mx-auto border p-5 m-5 rounded-3'>
            <h1 className='text-center text-primary'>Register</h1>
            <Form onSubmit={handleRegister}>
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
                    Register
                </Button>
            </Form>
            {errorELement}
            <div className='m-4'>
                <p className='text-center mt-2'>Already have an account? <span onClick={navigateLogin} className='text-primary'>Please login</span></p>
            </div>
            <div className='input-wrapper'>
                <button onClick={()=> signInWithGoogle()} className='google-auth'>
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </button>
            </div>
        </div>
    );
};

export default Register;