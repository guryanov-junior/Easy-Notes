import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { title, onClick } = props;

  return (
    <button className='button' onClick={onClick}>
      {title}
    </button>
  );
};

export { Button };
