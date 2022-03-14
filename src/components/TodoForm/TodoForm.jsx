import React from 'react';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import './TodoForm.scss';

const TodoForm = (props) => {
  const { addTodo, searchTodo, inputRef, getPosts, clearPostList } = props;

  return (
    <form className='form' onSubmit={(e) => addTodo(e)}>
      <div className='add-note'>
        <Input
          label={'Add a note'}
          inputRef={inputRef}
          onChange={(e) => searchTodo(e.target.value)}
        />
        <Button type='submit' title={'Add'} />
      </div>
      <div className='api-button'>
        <Button type='button' title={'Get notes from API'} onClick={getPosts} />
      </div>

      <Button type='button' title={'Clear list'} onClick={clearPostList} />
    </form>
  );
};

export { TodoForm };
