import React, { useState } from 'react';
import { Button } from '../UI/Button/Button';
import './TodoEditForm.scss';

const TodoEditForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: new Date().getTime(),
      text: input,
    });
    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type='text'
        placeholder='Редактировать'
        value={input}
        name='text'
        onChange={handleChange}
        cols='30'
        rows='10'
      ></textarea>
      <Button title={'Save'} onClick={handleSubmit} />
    </form>
  );
};

export { TodoEditForm };
