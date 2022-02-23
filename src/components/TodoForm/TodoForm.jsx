import React from 'react';
import { Button } from '../UI/Button/Button';
import './TodoForm.scss';

const TodoForm = (props) => {
  const { handleSubmit, inputRef, getPosts, clearPostList } = props;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='cards'>Add info into todo</label>
      <input type='text' id='cards' ref={inputRef} />
      <Button type='submit' title={'Add'} />
      <Button type='button' title={'Get todos from API'} onClick={getPosts} />
      <Button type='button' title={'Clear list'} onClick={clearPostList} />
    </form>
  );
};

export { TodoForm };
