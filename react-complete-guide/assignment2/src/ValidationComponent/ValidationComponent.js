import React from 'react';

const validationComponent = (props) => {
  let output = "Text Too Short";
  if (props.value.length >= 5) {
    output = "Text long enough"
  }
  return (
    <div className='ValidationComponent'>
      <p>{output}</p>
    </div>
  );
};

export default validationComponent;