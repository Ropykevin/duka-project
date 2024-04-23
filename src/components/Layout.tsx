import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import Header from '../components/header'
import Sidebar from "./sidebar";
import '../css/layout.css'

function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/login', { replace: true }); // Navigate to the login page
    };

    return (
        
        <div className="Layout">

            <Header></Header>
            <Sidebar></Sidebar>



{/*             
            
            <header className="layout-header">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Link to="/" className="navbar-brand">My Duka</Link>
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Home</Link>

                                    <Link to="/products" className="nav-link">Products</Link>
                                    <Link to="/sales" className="nav-link">Sales</Link>
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                    <Link to="/logout" className="nav-link" onClick={handleLogout}>Logout</Link>

                                    <Link to="/register" className="nav-link">Register</Link>
                                    <Link to="/login" className="nav-link">Login</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header> */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
