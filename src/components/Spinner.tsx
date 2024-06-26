import React from 'react';
import '../css/Spinner.css'; // Import the CSS file for styling

const Spinner: React.FC = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
}

export default Spinner;
