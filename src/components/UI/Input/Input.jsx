import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
  const inputType = props.type || 'text';
  const cls = [styles.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        placeholder={props.placeholder}
        ref={props.inputRef}
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
export { Input };
