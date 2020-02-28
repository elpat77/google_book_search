import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navigation">
            <div className="logo">
                <h3>Google Book Search</h3>
            </div>

            <div className="nav_links">
                <Link to="/" className="link">Book Search</Link>
                <Link to="/saved" className="link">Saved Books</Link>
            </div>

        </nav>
    );
};

export default Nav;