import React from 'react';
import '../css/NavBar.css';  // Importing CSS for styling

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">UNDERWORLD</a></li>
                <li><a href="#my-playlist">MY PLAYLIST</a></li>
                <li><a href="#popular">POPULAR</a></li>
                <li><a href="#account">MY ACCOUNT</a></li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
}

export default NavBar;
