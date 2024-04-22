import React, { useEffect, useState} from 'react'

export default function App(){

  const [backendData, setBackendData] = useState([{}])

  /* fetch (dummy) info from server (server.js) and update backendData var with the data
  defined proxy address (localhost:5000) in client package.json, letting us use relative address
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
    <div>
      {( typeof backendData.users === 'undefined') ? (
        <p> Loading... </p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}> {user} </p>
        ))
      )}
    
    </div>
  )
}