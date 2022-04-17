import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import titleName from '../../images/logo_w (1).png'
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    } 
    
    if(loading){
        return <Loading></Loading>
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark "  className='d-flex align-items-center'>
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img className='w-50' src={titleName} alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="review">Review</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        
                        
                        
                        {user?
                        <button onClick={()=>handleSignOut()} className='btn btn-primary'>Sign Out</button> 
                        :  
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;