import React from 'react';

function UserCards(props) {
    const { pic, first, last, gender, age, email, city, index, isHidden, curUser, handleClick } = props;

    return (
        <div>
            <img src={pic} alt='user img'/>
            <h4>{first} {last}</h4>
            <p>Gender: {gender}</p>
            {isHidden && curUser === index ?                     
                <div>
                  <p>Age: {age}</p>
                  <p>Email: {email}</p>
                  <p>City: {city}</p>
                </div> : <div></div> 
            }
            <button onClick={() => handleClick(index)} >
                {isHidden && curUser === index ? 'Hide info' : 'Show more'}
            </button>
        </div>
    )
}

export default UserCards;