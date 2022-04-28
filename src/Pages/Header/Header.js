import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className='logo' src={logo} alt='' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className="link" to='/'>Home</CustomLink>
                            <CustomLink className="link" to='donation'>Donation</CustomLink>
                            <CustomLink className="link" to='event'>Event</CustomLink>
                            <CustomLink className="link" to='blog'>Blog</CustomLink>
                            <button className='register-btn'><Link to='register' className='signup-link'>Register</Link></button>
                            <button className='admin'><Link to='login' className='login'>Login</Link></button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;