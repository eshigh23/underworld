import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Home from './components/Home.js'
import Landing from './components/Landing.js'
import Explore from './components/Explore.js'
import Signup from './components/Signup_Login/Signup.js';
import Login from './components/Signup_Login/Login.js'
import UserProfile from './components/UserProfile.js';

export default function App(){

  // get jwt token here and pass it into components?
  const [username, setUsername] = useState(null)

  
 useEffect(() => {
  getLoggedInUser()
}, [])


  async function getLoggedInUser() {
    const token = localStorage.getItem("token")
    if (token) {
      console.log("token confirmed on clientside")
      const response = await axios.post('http://localhost:5002/getUser', { token: token })

      if (response.data.success) {
        console.log("response is a success", response.data.user)
        const user = response.data.user
        setUsername(user.username)
      }
      else {
        console.log("response is a failure")
      }
    }
    else {
      console.log("token not confirmed clientside")
    }
 }

  return(

      <Router>
        <div className="App">
          <Routes>
              <Route
                  path="/"
                  element={<Home />}
              ></Route>
              <Route
                  path="/Explore"
                  element={<Explore />}
              ></Route>
              <Route
                  path="/Landing"
                  element={<Landing />}
              ></Route>
              <Route
                  path="/Signup"
                  element={<Signup />}
              ></Route>
              <Route
                path="/Login"
                element={<Login />}
              ></Route>
               <Route path="/profile/:username" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>

  )
}
