// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import UserCards from './UserCards';

function App() {
const [user, setUser] = useState([]);
const [isHidden, setIsHidden] = useState(true);
const [curUser, setCurUser] = useState('');

const handleClick = (index) => {
  let clickedUser = index
  setCurUser(clickedUser)

  let status = isHidden === true ? false : true;
  setIsHidden(status)

}

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
        
          {user.map((user, index) => {
            return <UserCards 
              pic={user.picture.large}
              first={user.name.first}
              last={user.name.last}
              gender={user.gender}
              email={user.email}
              city={user.location.city}
              index={index}
              isHidden= {isHidden}
              curUser= {curUser}
              handleClick={handleClick}
            />
          })}
        
      </header>
    </div>
  );
}

export default App;
