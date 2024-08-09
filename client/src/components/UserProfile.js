import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    
    const { username } = useParams();
    return (
        <div>
            <h1> user profile for { username }</h1>
        </div>
    )
}