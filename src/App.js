// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [user, setUser] = useState([]);
const [isHidden, setHide] = useState(true)

// const handleClick = (index) => {
//   let status 
// }

useEffect(() => {
  fetch('https://randomuser.me/api?results=5')
    .then(res => {
      return res.json()
    })
    .then(user => (setUser(user.results)))
  }, []);    

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {user.map((user, index) => {
            return <div>
              <img src={user.picture.medium} />
              <li key={index}>
                <h4>{user.name.first}{user.name.last}</h4> 
                <p>Gender: {user.gender}</p>
                {isHidden ? 
                  <div></div> : 
                    <div>
                      <p>Age: {user.dob.age}</p>
                      <p>Email: {user.email}</p>
                      <p>City: {user.location.city}</p>
                    </div>
                }
                <button onClick={(index) => {isHidden ? setHide(false) : setHide(true)}}>Show more info</button>
              </li>
            </div>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
