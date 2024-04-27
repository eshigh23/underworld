import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import Landing from './components/Landing.js'
import Explore from './components/Explore.js'

export default function App(){

  const [backendData, setBackendData] = useState([{}])

  /* fetch (dummy) info from server (server.js) and update backendData var with the data
     defined proxy address (localhost:5002) in client package.json, letting us use relative address
     I changed port to 5002 bc im alr using 5000 -Tommy
  */
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])


  return(
      /*<div>
      {( typeof backendData.users === 'undefined') ? (
        <p> Loading... </p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}> {user} </p>
        ))
      )}

	
      </div>*/

      <Router>
        <div className="App">
          <header>
            <Header />
          </header>
          <Routes>
              <Route
                  path="/Home"
                  element={<Home />}
              ></Route>
              <Route
                  path="/Explore"
                  element={<Explore />}
              ></Route>
              <Route
                  path="/"
                  element={<Landing />}
              ></Route>
          </Routes>
        </div>
      </Router>



  )
}
