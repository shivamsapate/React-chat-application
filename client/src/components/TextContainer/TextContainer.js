import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 className="title">Welcome to Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Made With React-js<span role="img" aria-label="emoji">❤️</span></h2>
      <h2 className="title">Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
      <div >
       <h1 className="link">Check out  <a href="https://github.com/shivamsapate/React-chat-application"><button className="git">GitHub</button></a></h1>
      </div>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;