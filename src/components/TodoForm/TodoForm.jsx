import React from 'react';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import './TodoForm.scss';

const TodoForm = (props) => {
  const { handleSubmit, inputRef, getPosts, clearPostList } = props;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input label={'Add a todo'} inputRef={inputRef} />
      <Button type='submit' title={'Add'} />
      <Button type='button' title={'Get todos from API'} onClick={getPosts} />
      <Button type='button' title={'Clear list'} onClick={clearPostList} />
    </form>
  );
};

export { TodoForm };
