import React, { useRef, useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import './Login.css';
import GoogleLogo from '../../images/google.svg'
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );


  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user || user1) {
    navigate('/home')
  }

  if (loading || loading1) {
    return <Loading></Loading>
  }

  const handleLogin = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
    console.log(email, password);
  }

  const navigateRegister = () => {
    navigate('/register')
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast ("please enter your email address")
    }

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
        <Button style={{ height: "60px" }} className='btn btn-lg mx-auto d-block w-100' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <div className='m-4'>
        <p className='text-center mt-2'>New to Genius Car? <span onClick={navigateRegister} className='text-primary'>Please Register</span></p>
        <p className='text-center mt-2'>Forget Password? <span onClick={resetPassword} className='text-primary'>Reset Password</span></p>
      </div>
      <div className='input-wrapper'>
        <button onClick={() => signInWithGoogle()} className='google-auth'>
          <img src={GoogleLogo} alt='' />
          <p> Continue with Google </p>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;