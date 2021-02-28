import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  if (props.notify === null) {
    props.notify = (event) => {};
  }
  return (
    <div className="UserInput">
      <input type="text" onChange={props.notify} value={props.username} />
    </div>
  )
};

export default userInput;