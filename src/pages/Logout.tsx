import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner"; // Import the Spinner component

const Logout: React.FC = () => {
    const [loading, setLoading] = useState(true); // State to manage loading
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        navigate('/login', { replace: true }); 
    };

    useEffect(() => {
        setTimeout(() => {
            handleLogout();
            setLoading(false); 
        }, 1500); 
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
}

export default Logout;
