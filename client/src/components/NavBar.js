import React, { useState, useEffect } from 'react';
import '../css/NavBar.css';  // Importing CSS for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();

    // checks on load if user is logged in or not, and if so fetches user data
    useEffect(() => {
        const fetchUser = async () => {
            console.log("i'm running")
            const token = localStorage.getItem("token")
            if (!token) {   // if no user is logged in, return
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

    function handleClick() {
        navigate(`/profile/${user.username}`)
    }

    function handleLogout(){
        localStorage.removeItem('token')
        // setIsLoggedIn(false)
        setUser(null)
        // navigate('/')   // does this refresh the page when logged in from home...? no...
        // may want to invalidate token server side...?
    }

    return (
        <>
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">UNDERWORLD</a></li>
                { user && <li><a href="#my-playlist">MY PLAYLIST</a></li> }
                <li><a href="#popular">POPULAR</a></li>
                { user && <li><a href="#account">MY ACCOUNT</a></li> }
                { user && <li><p onClick={handleLogout}> LOGOUT </p></li>}
                { !user && <li><a href="http://localhost:3000/login"> LOGIN/SIGNUP </a></li>}
            </ul>
            { user ? (
                <div className="nav-welcome">
                    <p className="nav-item" onClick={handleClick}> Welcome, {user.username} </p>
                </div> ) :
                <ul className="nav-links">
                    
                </ul>
            }
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
        </>
    );
}

export default NavBar;
