import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">Social Media Analytics</div>
            <nav>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;