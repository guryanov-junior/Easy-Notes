import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const { title, onClick } = props;
  const cls = [styles.Button];

  return (
    <button className={cls.join(' ')} onClick={onClick}>
      {title}
    </button>
  );
};

export { Button };
