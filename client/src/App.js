import React, { useEffect, useState} from 'react'

export default function App(){

  const [backendData, setBackendData] = useState([{}])

  // defined proxy address (localhost:5000) in client package.json, letting us use relative address
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