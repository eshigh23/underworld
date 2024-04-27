import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header(){
    return (
        <div className="header">
            <h1 className="header--title"> UNDERWöRLD </h1>
            <Link className="header--link" to="/Home"> HOME </Link>
            <Link className="header--link" to="/Explore"> EXPLORE </Link>
        </div>
    )
}