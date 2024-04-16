import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Layout() {
    return (
        <div className="Layout">
            <header className="layout-header">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Link to="/" className="navbar-brand">My Duka</Link>
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/products" className="nav-link">Products</Link>
                            <Link to="/sales" className="nav-link">Sales</Link>
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            <Link to="/register" className="nav-link">Register</Link>
                            <Link to="/login" className="nav-link">Login</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
