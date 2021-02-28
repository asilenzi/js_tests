import React from 'react';

const userOutput = (props) => {
  const style = {
    color: (props.fgColor === null)? 'black' : props.fgColor,
  }

  return (
    <div className='UserOutput'>
      <p style={style} >UserName {props.username}</p>
      <p>Second Line {props.username}</p>
    </div>
  );
};

export default userOutput;