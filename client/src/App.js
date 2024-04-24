import React, { useEffect, useState} from 'react';
import './App.css';
import Streamer from './components/Streamer.js';

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
      <div className="App">
      <header className="App-header">
        <h1>Underwörld</h1>
        <Streamer />
      </header>
    </div>

  )
}
