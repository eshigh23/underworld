import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Landing(){
    const [users, setUsers] = useState([])

    // currently, users.data is returning an empty array instead of the user document
    useEffect(() => {
        axios.get('http://localhost:5002/getUsers')
          .then(users => setUsers(users.data))
          .catch(error => console.error('Error fetching users:', error));
      }, []);
    

    return(
        <div>
            <h1>Users</h1>
                <ul>
                    {users.map(user => (
                    <li key={user._id}>{user.name}</li>
                    ))}
                </ul>
            </div>
  );


}