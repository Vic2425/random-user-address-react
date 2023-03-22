import React from "react";
import "./App.css";

function UserCards(props) {
  const {
    pic,
    first,
    last,
    gender,
    age,
    email,
    city,
    index,
    isHidden,
    curUser,
    handleClick,
  } = props;

  return (
    <div className="container">
      <div className="card">
        <div className="top"></div>
        <div className="img">
          <img src={pic} alt="user img" />
        </div>
        <div className="divOne">
          <h5>
            {first} {last}
          </h5>
          <h6>{email} </h6>
        </div>
        <div className="divTwo">
          {isHidden && curUser === index ? (
            <div>
              <h6>
                <span>Age:</span> {age}
              </h6>
              <h6>
                <span>Gender:</span> {gender}
              </h6>
              <h6>
                <span>City:</span> {city}
              </h6>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="btn">
          <button onClick={() => handleClick(index)}>
            {isHidden && curUser === index ? "Hide Info" : "Show Info"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCards;
