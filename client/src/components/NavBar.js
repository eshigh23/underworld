import React, { useState, useEffect } from 'react';
import '../css/NavBar.css';  // Importing CSS for styling

function NavBar() {
    const [user, setUser] = useState(null)

    // useEffect(async () => {
    //     const token = localStorage.getItem("token")
    //     try {
    //         const curUser = await UserModel.findOne( { _id: token })
    //         if (curUser){
    //             setUser(curUser)
    //         }
    //         else {
    //             console.log("The user in NavBar.js is null")
    //         }
    //     } catch (e) {
    //         console.error("Error fetching user in NavBar.js", )
    //     }
    // }, [])

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
