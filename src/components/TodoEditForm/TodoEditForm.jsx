import React from 'react';
import { Button } from '../UI/Button/Button';
import './TodoEditForm.scss';

const TodoEditForm = (props) => {
  return (
    <form>
      <textarea
        type='text'
        placeholder='Редактировать'
        // value={'input'}
        name='text'
        // onChange={'handleChange'}
        cols='30'
        rows='10'
      ></textarea>
      <Button title={'Save'} />
    </form>
  );
};

export { TodoEditForm };
