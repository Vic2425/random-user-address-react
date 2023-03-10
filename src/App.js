import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [user, setUser] = useState([]);

useEffect(() => {
  axios.get('https://randomuser.me/api?results=5')
    .then(res => {
      // console.log(res)
      setUser(res.data.result)
    })
    .catch(err => {
      console.log(err)
    })
})

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {user.map((user, index) => {
            return <li key={index}>{user.name.first}{user.name.last}</li>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
