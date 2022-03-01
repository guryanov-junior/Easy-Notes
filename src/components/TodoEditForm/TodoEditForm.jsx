import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../UI/Button/Button';
import './TodoEditForm.scss';

const TodoEditForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const textareaRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: props.edit.id,
      title: input,
    });

    setInput('');
  };

  useEffect(() => {
    textareaRef.current.focus();
    textareaRef.current.selectionStart = textareaRef.current.value.length;
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='edit-form'>
      <textarea
        ref={textareaRef}
        type='text'
        placeholder='Редактировать'
        value={input}
        name='text'
        onChange={handleChange}
      ></textarea>
      <Button title={'Save'} onClick={handleSubmit} />
    </form>
  );
};

export { TodoEditForm };
