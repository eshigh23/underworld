import React, { useState, useEffect } from 'react';
import '../css/NavBar.css';  // Importing CSS for styling
import axios from 'axios';

function NavBar() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token")
            if (!token) {
                console.log("no token found in Navbar.js")
                return;
            }
            try {
                const response = await axios.post('http://localhost:5002/getUser', { token: token })
                if (response.data.success){
                    console.log("User fetched successfully in NavBar.js:", response.data.user);
                    setUser(response.data.user)
                }
                else {
                    console.log("The user in NavBar.js is null")
                }
            } catch (e) {
                console.error("Error fetching user in NavBar.js", )
            }
        }
        fetchUser();
    }, [])

    return (
        <>
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">UNDERWORLD</a></li>
                <li><a href="#my-playlist">MY PLAYLIST</a></li>
                <li><a href="#popular">POPULAR</a></li>
                <li><a href="#account">MY ACCOUNT</a></li>
            </ul>
            { user ? <p className="nav-welcome"> Welcome, {user.username} </p> : '' }
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
        </>
    );
}

export default NavBar;
