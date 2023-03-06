import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import headerTitle from '../../images/Healthcheck.png'
import './Header.css'

const Header = () => {
    const [user, loading] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' className='d-flex align-items-center navbarbg' style={{background:"white"}}>
            <Container>
                <Navbar.Brand>
                    <Link to='/home' class="nav-link active" aria-current="page" >
                        <img src={headerTitle} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link className='fw-bolder' style={{color:"#003f91"}} as={Link} to="home">home</Nav.Link>
                        <Nav.Link className='fw-bolder' style={{color:"#003f91"}} as={Link} to="doctors" >Doctors</Nav.Link>
                        <Nav.Link className='fw-bolder' style={{color:"#003f91"}} as={Link} to="review" >Review</Nav.Link>
                        <Nav.Link className='fw-bolder' style={{color:"#003f91"}} as={Link} to="addProduct" >Add Product</Nav.Link>
                        <Nav.Link className='fw-bolder' style={{color:"#003f91"}} as={Link} to="manageProducts" >Manage Product</Nav.Link>
                        <Nav.Link className='fw-bolder' style={{color:"#003f91"}} as={Link} to="about" >About</Nav.Link>
                    </Nav>
                    <Nav>
                        {user ?
                            <button onClick={() => handleSignOut()} className='btn text-white' style={{background:"#0353a4"}}>Sign Out</button>
                            :
                            <Nav.Link className='fw-bolder' as={Link} to="login" style={{color:"#003f91"}}>
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;