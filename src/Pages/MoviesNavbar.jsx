import React from 'react'  
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImage from '../Images/Play.png'; 

const MoviesNavbar = () => {
  return ( 
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container> 
          <Link className='navbar-brand' to='/'><img style={{ height:'20px' }} src={LogoImage} alt='logo'/><span>MoviesApp</span></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end text-center" id="responsive-navbar-nav"> 
            <Nav>
                <Link className='nav-link' to="/">Home</Link> 
                <Link className='nav-link' to="/discover">Discover</Link>
                <Link className='nav-link' to="/tvshows">Tv Shows</Link>
                {/* <Link className='nav-link' to="/login">Login</Link>
                <Link className='nav-link' to="/signup">SignUp</Link> */}
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
 
export default MoviesNavbar